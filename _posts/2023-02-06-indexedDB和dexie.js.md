---
layout:     post
title:      indexedDB和dexie.js
subtitle:   indexedDB和dexie.js
date:       2023-02-06
author:     YS
catalog: true
tags:
    - indexedDB
---
## 中文教程：https://www.tangshuang.net/3735.html#

### IndexedDB 具有以下特点：

### indexedDB 是非关系型数据库
        (1).键值对储存 (2).异步 (3).支持事务 (3).同源限制 (5).储存空间大 (6).支持二进制储存
```js
// indexedDB使用他的open方法创建一个浏览器数据库
var indB = indexedDB.open('indB', 1)
// 用来存储数据库内的表
var db;
// 数据库打开成功的回调
indB.onsuccess = function (tx) {
    // 如果以前就有这个是数据库的话就将里面的表放到db中
    db = indB.result
    console.log('数据库开启成功');
}
// 第一次打开数据库时调用
indB.onupgradeneeded = function (tx) {
    // 并将里面的表放入到db中
    db = tx.target.result
    // 如果没有person这张表的话那么就创建一个
    if (!db.objectStoreNames.contains('person')) {
        // 规定必须有一个键key
        // autoIncrement:true
        db.createObjectStore('person', { keyPath: 'id' })
    }
}
// 添加 add
function add(value) {
    // transaction开启一个事物
    db.transaction(['person'], 'readwrite')
        // 拿到其中的一张表
        .objectStore('person')
        // 添加的值
        .add(value)
}
// 删除 delete
function del() {
    db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .delete(1)
}
// 编辑 put
function edit() {
    db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .put({ id: 2, name: '张三' })
}
// 查询 get
function get(key) {
    return new Promise((reslove, reject) => {
        var req = db.transaction(['person'], 'readwrite')
            .objectStore('person')
            .get(key)
        req.onsuccess = function (res) {
            reslove(res.target.result)
        }
    })
}
//调用 
setTimeout(() => {
    
}, 1000);
```



### Dexie.js 封装

https://www.npmjs.com/package/dexie
```html
<!doctype html>
<html>
 <head>
  <script src="https://unpkg.com/dexie@latest/dist/dexie.js"></script>
  <script>
   //
   // Declare Database
   //
   var db = new Dexie("FriendDatabase");
   db.version(1).stores({
     friends: "++id,name,age"
   });


   //
   // Manipulate and Query Database
   //
   db.friends.add({name: "Josephine", age: 21}).then(function() {
       return db.friends.where("age").below(25).toArray();
   }).then(function (youngFriends) {
       alert ("My young friends: " + JSON.stringify(youngFriends));
   }).catch(function (e) {
       alert ("Error: " + (e.stack || e));
   });
  </script>
 </head>
</html>
```js