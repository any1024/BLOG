
MG---
title: 安装 MongoDB
date: '2018-07-25 17:23:58'
tag: 
  - Node
meta:
  -
    name: MongoDB
    content: MongoDB study route
  -
    name: MongoDB
    content: mac 下安装MongoDB
---
mac 下安装MongoDB
<!-- more -->

## Install MongoDB Community Edition with Homebrew

### Update Homebrew’s package database.

`brew update`

### Install MongoDB.
`brew install mongodb`

### OR Install the MongoDB Binaries with TLS/SSL Support)

`brew install mongodb --with-openssl`

### Create the data directory.

`mkdir -p /data/db`

	
### Set permissions for the data directory.

`sudo chmod 777 /data/db`

[参考资料](http://stackoverflow.com/questions/5973811/mongodb-data-directory-permissionsttp://note.youdao.com/)

	
### Run MongoDB.
`mongod`