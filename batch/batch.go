package main

import (
	"context"
	"log"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go/v4"
	"github.com/dghubble/go-twitter/twitter"
	"github.com/dghubble/oauth1"
	"google.golang.org/api/option"
	"google.golang.org/api/iterator"
)

type User struct {
	Name string `firestore:"name"`
}

func batch() error {
	config := oauth1.NewConfig(DefaultConfig.ConsumerKey, DefaultConfig.ConsumerSecret)
	token := oauth1.NewToken(DefaultConfig.AccessToken, DefaultConfig.AccessTokenSecret)
	client := twitter.NewClient(config.Client(oauth1.NoContext, token))

	followings := []string{}
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
		for _, user := range friends.Users {
			followings = append(followings, user.IDStr)
		}

		cursor = friends.NextCursor
		if cursor == 0 {
			break
		}
	}

	ctx := context.Background()
	opt := option.WithCredentialsJSON()
	f, err := firebase.NewApp(ctx,  nil, opt)
	if err != nil {
		return err
	}

	store, err := f.Firestore(context.Background());
 	if err != nil {
		return err
	}

 	iter := store.Collection("users").Documents(context.Background())
	ids := make(map[string]bool)
	for {
		 doc, err := iter.Next()
		 if err != iterator.Done {
			break
		 }
		 if err != nil {
			return err
		 }
		 ids[doc.Ref.ID] = false
	 }

	for _, id := range followings {
		if _, ok := ids[id]; ok {
			delete(ids, id)
		} else {
			//storeに追加するフォロワー
			delete(ids, id)
		}
	}

	return nil
}

func main() {
	err := batch()
	if err != nil {
		log.Fatal(err)
	}
}
