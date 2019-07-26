---
title: button
subtitle: 按钮
pageClass: custom-page-class
---
### Button 按钮
---
按钮用于传递用户触摸时会触发的操作

#### 使用指南
>
```js
import { Button } from 'tsvue'
Vue.component(Button.name, Button);
```
#### 一般用法 
>
```vue
<Button size="large">default</Button>
<Button size="large" :plain="true">default plain</Button>
<Button size="large" :disabled="true">default disabled</Button>
<Button size="large" type="primary" :plain="true">primary plain</Button>
<Button size="large" type="primary" :disabled="true">primary disabled</Button>
<Button size="large" type="danger" :plain="true">danger plain</Button>
```

#### 不同尺寸
>
```vue
 <Button size="large">default</Button>
 <Button size="normal">primary</Button>
 <Button size="small">default</Button>
```

#### 自定义
>
```vue
// 自定义 border-radius
<Button size="large" borderRadius=28>border-radius</Button>
// 自定义 font-size
<Button size="large" fontSize=11>font-size</Button>
// 自定义 background-color
<Button size="large" backgroundColor="#00cccc">background-color</Button>
// 自定义 字体颜色
<Button size="large" fontColor="#6633ff">font-color</Button>
// 自定义 按钮边框阴影
<Button size="large" boxShadow="0 0 1px #6699ff">box-shadow</Button
```

#### API
Progress props
|    参数       |   说明  |   类型   |  可选值  |  默认值 |
|   :----     | :----  | :----  | :---- | :---- | 
|  size        | 按钮大小 | String |  `large`，`normal`，`small` | - |
|  type        | 按钮类型 | String | `primary`，`danger`  | `default` |
| plain        | 按钮是否镂空,背景色透明  | Boolean  | -| `false` |
| disabled        |   设置按钮为禁用     | Boolean | - | `false` |
| borderRadius    |   给按钮添加圆角边框 | String   | - | - |
| fontSize        |   设置按钮字体大小   | String   | - | - |
| backgroundColor |   设置按钮背景颜色   | String   | - | - |
| fontColor       |   设置按钮字体颜色   | String   | - | - |
| boxShadow       |   设置按钮阴影      | String   | - | - |