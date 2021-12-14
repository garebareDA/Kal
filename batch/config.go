package main

import (
	_ "embed"
	"encoding/json"
	"errors"
	"fmt"
	"os"
)

//go:embed config.json
var configBytes []byte

type TwitterConfig struct {
	ConsumerKey       string `json:"consumer_key"`
	ConsumerSecret    string `json:"consumer_secret"`
	AccessToken       string `json:"access_token"`
	AccessTokenSecret string `json:"access_token_secret"`
}

var DefaultConfig *TwitterConfig

func NewConfig() (*TwitterConfig, error) {
	if len(configBytes) < 1 {
		return nil, errors.New("config.json is empty")
	}
	var t *TwitterConfig
	err := json.Unmarshal(configBytes, &t)
	if err != nil {
		return nil, err
	}
	return t, nil
}

func init() {
	t, err := NewConfig()
	if err != nil {
		fmt.Fprintf(os.Stderr, err.Error())
	}
	DefaultConfig = t
}
