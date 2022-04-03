#初めての Nestjs

### 環境変数の利用

npm i @nestjs/config

### Mysql の起動

sudo service mysql start

## typeorm はバージョンの指定に気をつける

[nestjs の公式より](https://docs.nestjs.com/techniques/database)

npm install --save @nestjs/typeorm typeorm@0.2 mysql2

## mysql は mysql2 を利用することで

認証プラグインが【caching_sha2_password】に変更されたため対応

## graphql のセットアップ

npm i @nestjs/graphql graphql-tools apollo-server-express graphql
