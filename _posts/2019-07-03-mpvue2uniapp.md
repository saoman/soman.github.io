---
layout:     post
title:      mpvue to uniapp
subtitle:   mpvue to uniapp
date:       2018-07-03
author:     BY
catalog: true
tags:
    - mpvue to uniapp
---


## mpvue to uniapp


# 1. 初始化一个 mpvue 项目

# 2. 全局安装 vue-cli
# 一般是要 sudo 权限的
$ npm install --global vue-cli@2.9

# 3. 创建一个基于 mpvue-quickstart 模板的新项目
# 新手一路回车选择默认就可以了
$ vue init mpvue/mpvue-quickstart my-project

# 5. 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev

# 项目迁移
HBuilderX里新建默认模板的uni-app项目
将mpvue项目src目录内的文件拷贝到uni-app项目
建立页面配置，根据原项目的app.json或者main.js内的页面配置填写pages.json的内容，并删除原来的页面配置。如果项目未手动配置所有页面，需要根据pages目录内的页面手动增加页面信息。每个页面单独的配置从相关页面的main.json文件或者main.js文件内拷贝，并删除原有配置。
修改页面文件名称，删除每个页面的main.js和main.json文件，并将页面名称修改为main.vue。
静态资源拷贝，将原项目static目录拷贝到uni-app项目，查找页面和组件内对资源的引用，检查并修正路径。
手动安装package.json文件dependencies节点下的模块（忽略mpvue、vuex、flyio，这些已经内置在uni-app内），安装方式可参考参考社区文章：uni-app引用npm第三方库，HBuilderX 0.1.51或以上版本可直接使用npm管理依赖：NPM支持。


![](https://github.com/saoman/saoman.github.io/blob/master/img/mpvue-to-uniapp.png)
![](http://ww4.sinaimg.cn/large/006tKfTcgy1fgrgbgf77aj308i02v748.jpg)

