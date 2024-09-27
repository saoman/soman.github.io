---
layout:     post
title:      sharedWorker聊天室
subtitle:   sharedWorker聊天室
date:       2023-01-09
author:     YS
catalog: true
tags:
    - worker
---
### sharedWorker聊天室
### sharedWorker.js
```js
const uuids = [];
const ports = [];
self.onconnect = (e) => {// 监听连接，每有一个页面打开，就会调用一次
  const port = e.ports[0]; //有一个页面连接进来
  console.log('打开新页面', e.ports[0], e.ports)
  ports.push(port); //保存页面
  // 获取页面标识
  const uuid = Math.random().toString(36).substr(2);
  uuids.push(uuid); //保存页面的uuid
  port.postMessage({//给这个页面推送连接成功的消息，并附带uuid
    type: 'connect',
    uuid: uuid
  });
  console.log('打开新页面uuid:', uuid)
  // 监听消息
  port.onmessage = (e) => {//监听当前页面发送消息，并把当前页面的消息官博给所有页面
    const index = ports.indexOf(port);
    const uuid = uuids[index];
    console.log('页面发送消息:', port, index, uuid)
    console.log('页面发送消息 message:', e.data)
    // 群发消息
    broadcast({
      type: 'message',
      sender: uuid,
      message: e.data.message
    });
  };
};
// 群发消息
const broadcast = (data) => {
  ports.forEach((port) => {
    port.postMessage(data);
  });
}
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <style>
    .chat {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    #messages {
      height: 500px;
      width: 300px;
      overflow: auto;
      border: #3498db 1px solid;
      padding: 0 10px;
    }

    .chat__messages {
      flex: 1;
      overflow-y: auto;
      margin: 4px 0;
    }

    .sender {
      font-size: 12px;
      margin: 0;
      padding: 0;
    }

    .sender:after {
      content: ' :';
    }

    .message {
      width: auto;
      max-width: 300px;
      background: #3498db;
      padding: 10px;
      border-radius: 10px;
      margin: 10px 0;
      font-size: 16px;
      color: #fff;
    }
  </style>
</head>

<body>
  <div class="chat">
    <div id="messages">
    </div>
    <div class="chat__input">
      <input type="text" id="message">
      <button id="send">发送</button>
    </div>
  </div>
  <script>
    let uuid = ''
    const sharedWorker = new SharedWorker('sharedWorker.js');
    sharedWorker.port.onmessage = (e) => {
      if (e.data.type === 'connect') {
        uuid = e.data.uuid;
        alert('连接成功')
        return;
      }
      const messageDom = `
<div class="chat__messages">
<p class="sender" ${uuid === e.data.sender ? 'style="color: #165DFF"' : ""}>${e.data.sender}</p>
<p class="message">${e.data.message}</p>
</div>
`
      document.getElementById('messages').insertAdjacentHTML('beforeend', messageDom);
      // 滚动到底部
      document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
    };
    document.getElementById('send').addEventListener('click', () => {
      const message = document.getElementById('message').value;
      if (!message) {
        alert('请输入内容')
        return;
      }
      const data = {
        type: 'message',
        message: message,
      }
      sharedWorker.port.postMessage(data);
      document.getElementById('message').value = '';
    });
  </script>
</body>

</html>
```