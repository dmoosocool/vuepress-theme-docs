---
title: Avatar
subtitle: 头像
pageClass: custom-page-class
iframe: /h5/index.html#/pages/view/avatar/index
---
# Avatar 头像
---
用于展示用户头像

## 使用指南
在 Taro 文件中引入组件
```javascirpt
import { AtAvatar } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**
```javascript
@import "~taro-ui/dist/style/components/avatar.scss";
```
## 用法
```html
<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
<AtAvatar text='凹凸实验室'></AtAvatar>
<AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
<AtAvatar circle text='凹凸实验室'></AtAvatar>
```
