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

type FirebaseConfig struct {
	Type                    string `json:"type"`
	ProjectID               string `json:"project_id"`
	PrivateKeyID            string `json:"private_key_id"`
	PrivateKey              string `json:"private_key"`
	ClientEmail             string `json:"client_email"`
	ClientID                string `json:"client_id"`
	AuthURI                 string `json:"auth_uri"`
	TokenURI                string `json:"token_uri"`
	AuthProviderX509CertURL string `json:"auth_provider_x509_cert_url"`
	ClientX509CertURL       string `json:"client_x509_cert_url"`
}

type Config struct {
	Twitter *TwitterConfig
	Firebase *FirebaseConfig
}

var DefaultConfig *Config

func NewConfig() (*Config, error) {
	if len(configBytes) < 1 {
		return nil, errors.New("config.json is empty")
	}
	var c *Config
	err := json.Unmarshal(configBytes, &c)
	if err != nil {
		return nil, err
	}
	return c, nil
}

func init() {
	c, err := NewConfig()
	if err != nil {
		fmt.Fprintf(os.Stderr, err.Error())
	}
	DefaultConfig = c
}
