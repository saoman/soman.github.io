---
layout:     post
title:      基于gitlab创建npm私有库
subtitle:   基于gitlab创建npm私有库
date:       2022-10-24
author:     YS
catalog: true
tags:
    - npm
---

# 基于gitlab创建npm私有库

```
1、在gitlab上创建项目，并增加tag标签
比如创建后的地址：http://ip:host/test.git  （注意修改成你自己对应的ip地址和端口）

标签为1.0.0

2、创建项目
2.1 增加package.json文件
{
  "name": "test-package",
  "version": "1.0.0",
  "description": "npm test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "npm test"
  ],
  "author": "xxxx",
  "license": "ISC"
}
注意name、main和version的填写

name对应安装后的插件名称。

2.2 增加index.js文件
export const hello=()=>{
  console.log('hello world!')
}
3、使用私有包
npm install --save git+http://ip:host/test.git#1.0.0
最后将在你的项目的package.json的dependencies里看到

"test-package": "git+http://ip:host/test.git#1.0.0"

```
