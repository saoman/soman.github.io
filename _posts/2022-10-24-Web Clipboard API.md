---
layout:     post
title:      Web Clipboard API
subtitle:   Web Clipboard API
date:       2021-09-21
author:     YS
catalog: true
tags:
    - html
    - javascript
    - clipboard
---

Web Clipboard API 让开发者能够更灵活地与用户的剪贴板交互，主要包括以下几个方面：

1. **读取剪贴板内容**：
   - 使用 `navigator.clipboard.read()` 方法，该方法返回一个 Promise，解析为剪贴板中可用的内容。你可以通过 `ClipboardItem` 来指定你要读取的数据类型（例如，文本、图像）。

2. **写入剪贴板内容**：
   - 使用 `navigator.clipboard.write()` 方法，可以将数据写入剪贴板。此方法同样返回一个 Promise，接受一个包含 `ClipboardItem` 对象的数组。例如，你可以创建一个包含文本的 `ClipboardItem`，并将其写入剪贴板。

3. **异步处理**：
   - 所有剪贴板操作都是异步的，这意味着你需要使用 `.then()` 或 `async/await` 来处理返回的 Promise。

4. **安全和权限**：
   - 访问剪贴板操作通常要求用户的互动，例如通过按钮点击触发。此外，只有在 HTTPS 上下文中，这些 API 才能正常工作，以保护用户数据的隐私和安全。

5. **示例代码**：
   ```javascript
   // 读取剪贴板内容
   async function readClipboard() {
       const clipboardItems = await navigator.clipboard.read();
       for (const item of clipboardItems) {
           const types = item.types;
           for (const type of types) {
               const blob = await item.getType(type);
               // 处理 blob 数据
           }
       }
   }

   // 写入剪贴板内容
   async function writeClipboard(text) {
       const item = new ClipboardItem({ 'text/plain': new Blob([text], { type: 'text/plain' }) });
       await navigator.clipboard.write([item]);
   }
   ```

通过 Web Clipboard API，开发者可以创建更具互动性的应用，例如便捷的复制功能、富文本编辑器等，提升用户体验。