---
layout:     post
title:      BroadcastChannel
subtitle:   BroadcastChannel
date:       2023-01-09
author:     YS
catalog: true
tags:
    - worker
---
### BroadcastChannel广播用法
### multiply.js
```js
const first = document.querySelector("#number1");
const result1 = document.querySelector(".result1");
var bc = new BroadcastChannel('test_channel');

bc.onmessage = function (ev) {
console.log(ev);
result1.textContent = ev.data;
}

first.onchange = function () {
bc.postMessage('This is a test message.' + first.value);
console.log("Message posted to worker");
};
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width" />
<title>BroadcastChannel example</title>
</head>

<body>
<h1>BroadcastChannel example</h1>

<div class="controls" tabindex="0">
<form>
<div>
<label for="number1">Multiply number 1: </label>
<input type="text" id="number1" value="0" />
</div>
</form>

<p class="result1">Result: 0</p>
</div>
<script src="multiply.js"></script>
</body>
</html>
```