# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|:-----|:---|:------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups
- has_many :message

## messageテーブル
|Column|Type|Options|
|:-----|:---|:------|
|body|text|null: false|
|image|string|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|:-----|:---|:------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Association
- has_many :user
- has_many :message

## groups_usersテーブル
|Column|Type|Options|
|:-----|:---|:------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user