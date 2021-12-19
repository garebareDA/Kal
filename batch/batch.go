package main

import (
	"context"
	"encoding/json"
	firebase "firebase.google.com/go/v4"
	"github.com/dghubble/go-twitter/twitter"
	"github.com/dghubble/oauth1"
	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
	"log"
)

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

func batch() error {
	config := oauth1.NewConfig(DefaultConfig.Twitter.ConsumerKey, DefaultConfig.Twitter.ConsumerSecret)
	token := oauth1.NewToken(DefaultConfig.Twitter.AccessToken, DefaultConfig.Twitter.AccessTokenSecret)
	client := twitter.NewClient(config.Client(oauth1.NoContext, token))

	followings := []twitter.User{}
	var cursor int64 = 0
	for {
		friends, _, err := client.Friends.List(&twitter.FriendListParams{
			ScreenName: "garebare521",
			Cursor:     cursor,
			Count:      100,
		})
		if err != nil {
			return err
		}

		followings = append(followings, friends.Users...)

		cursor = friends.NextCursor
		if cursor == 0 {
			break
		}
	}

	ctx := context.Background()
	b, _ := json.Marshal(DefaultConfig.Firebase)
	opt := option.WithCredentialsJSON(b)
	f, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		return err
	}
	store, err := f.Firestore(context.Background())
	if err != nil {
		return err
	}

	iter := store.Collection("users").Documents(context.Background())
	ids := make(map[string]bool)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return err
		}
		ids[doc.Ref.ID] = false
	}

	for _, user := range followings {
		if _, ok := ids[user.IDStr]; ok {
			//すでに存在するフォロワー
			delete(ids, user.IDStr)
		} else {
			//storeに追加するフォロワー
			_, err := store.Collection("users").Doc(user.IDStr).Set(context.Background(), User{
				ID:   user.Name,
				Name: user.ScreenName,
			})
			if err != nil {
				return err
			}
		}
	}
	//残ったユーザーをStoreから削除
	for id := range ids {
		store.Collection("users").Doc(id).Delete(context.Background())
	}

	return nil
}

func main() {
	err := batch()
	if err != nil {
		log.Fatal(err)
	}
}
