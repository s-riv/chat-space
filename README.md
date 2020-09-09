# アプリ名
Chat Space

# URL
http://54.95.59.51/

# 概要
テックキャンプ応用カリキュラムにて、チャットアプリケーションの実装をデプロイまで行いました。
IPアドレス：54.95.59.51

# DEMO
![chat-space](https://user-images.githubusercontent.com/68064826/92599054-abfa6300-f2e4-11ea-8da2-9db41e406797.gif)

# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|:-----|:---|:------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :messages

## messageテーブル
|Column|Type|Options|
|:-----|:---|:------|
|body|text|
|image|string|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|:-----|:---|:------|
|name|string|null: false|
### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :messages

## groups_usersテーブル
|Column|Type|Options|
|:-----|:---|:------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
