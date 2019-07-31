---
title: ActionSheet
subtitle: 活动面板
pageClass: custom-page-class
iframe: /h5/index.html#/pages/action/action-sheet/index
---

# ActionSheet 活动面板
该组件提供了一种多端统一的 `动作面板` 样式与 `IOS` 对齐，在页面上的层级为 `1010`

## 使用指南
在 Taro 文件中引入组件
```javascript
import { AtActionSheet, AtActionSheetItem } from "taro-ui"
```

**组件依赖的样式文件（仅按需引用时需要）**
```javascript
@import "~taro-ui/dist/style/components/action-sheet.scss";
```

## 一般用法
```html
<AtActionSheet isOpened>
  <AtActionSheetItem>
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem>
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```

## 添加标题和底部取消按钮
```html
<AtActionSheet isOpened cancelText='取消' title='头部标题可以用通过转义字符换行'>
  <AtActionSheetItem>
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem>
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```

## 添加监听事件
```html
<AtActionSheet isOpened cancelText='取消' title='头部标题可以用通过转义字符换行' onCancel={ this.handleCancel } onClose={ this.handleClose }>
  <AtActionSheetItem onClick={ this.handleClick }>
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem>
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```