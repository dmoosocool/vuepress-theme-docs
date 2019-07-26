---
title: dialog
subtitle: 对话框
pageClass: custom-page-class
---

### Dialog 对话框
---
提供一个简单的的 `dialog对话框` 组件

#### 使用指南
>
```js
import { Dialog } from 'tsvue';
Vue.component(Dialog.name, Dialog);
```
#### 一般用法 
>
```vue
<Dialog
  title="温馨提示"
  :visible="true"
>
 <span>这是主内容</span>
</Dialog>
```

#### 只显示确定按钮
>
```vue
<Dialog
  title="温馨提示"
  :visible="true"
  :hideCancel="true"
>
 <span>只显示确定按钮</span>
</Dialog>
```

#### API
Dialog props
|    参数     |   说明   |   类型   |  可选值  |  默认值 |
|   :----    | :----   | :----  | :----  | :---- | 
| title       | 标题    | String   |  -   | - |
| hideCancel  | 是否隐藏取消     | Boolean  | - | `false` |
| visible     | Dialog显示隐藏  | Boolean  |  - | `false` |

Dialog event
| 事件名称 | 说明 | 返回参数 | 
| :----  | :--- | :---- |
| afterClose | 点击取消或确定后的事件 | - |