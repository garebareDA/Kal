package main

import (
	"github.com/dghubble/go-twitter/twitter"
	"github.com/dghubble/oauth1"
	"log"
)

func batch() error {
	config := oauth1.NewConfig(DefaultConfig.ConsumerKey, DefaultConfig.ConsumerSecret)
	token := oauth1.NewToken(DefaultConfig.AccessToken, DefaultConfig.AccessTokenSecret)
	client := twitter.NewClient(config.Client(oauth1.NoContext, token))

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
		cursor = friends.NextCursor

		if cursor == 0 {
			break
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
