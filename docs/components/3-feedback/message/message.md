---
title: message
subtitle: 消息通知
pageClass: custom-page-class
---

### Message 对话框
---
可进行消息提醒, Message接受一个字符串或者一个对象

#### 使用指南
>
```js
import { Message } from 'tsvue';
```
#### 一般用法
说明  
   - tsvue注册了一个$Message方法用于调用, Message 可以接收一个字符串或一个对象作为参数，它会被显示为正文内容。
```vue
<template>
  <div>
    <Button size="large" type="primary" @click="openMessage">openMessage</Button>
  </div>
</template>

<script>
export default {
  methods: {
    openMessage() {
      this.$Message({
        type: 'success',
        message: '这是提示消息'
      });
    }
  }
}
</script>
```
#### 带指定用法
说明
- Message原型上提供了`info`,`error`,`success`方法直接调用来显示对应的type类型
```vue 
<template>
  <div>
    <Button size="large" type="primary" @click="openMessage">openMessage</Button>
  </div>
</template>

<script>
export default {
  methods: {
    openMessage() {
      this.$Message.info('这是提示消息');
    }
  }
}
</script>
```
#### API
Message props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :-- | :-- | :-- | :-- | :-- |
| message | 消息文字 | String | - | - |
| type    | 主题    | String | `info`，`success`，`error` | - |
| duration| 消息持续提示时间 | Number | - | `3000` |
| onClose | 关闭时的回调函数 | Function | - | - |