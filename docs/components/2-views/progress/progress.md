---
title: progress
subtitle: 进度条
pageClass: custom-page-class
---

### Progress 进度条
---
提供一个方便的 `进度条` 组件

#### 使用指南
>
```js
import { Progress } from 'tsvue'
Vue.component(Progress.name, Progress);
```
#### 一般用法 
说明
- percentage为必传参数，其值为 0 ~ 100
```vue
<Progress percentage="30" />
```

#### 显示百分比
>
```vue
<Progress showText percentage="30" />
```

#### 传入不同的状态
>
```vue
<Progress percentage="100" status="success" />
<Progress percentage="100" status="info" />
<Progress percentage="100" status="error" />
```

#### 自定义颜色
>
```vue
<Progress bgColor="#ff0099" percentage="10" />
```

#### API
Progress props
|    参数     |   说明  |   类型  | 可选值 |  默认值 |
|   :----    | :----   | :----  | :---- | :----  | 
| percentage  | 进度值    | Number  | - | - |
| showText    | 百分比显示 | Boolean | - | `false` |
| status      | 状态      | String  | `success` `info` `error`| `success` |
| bgColor     | 进度条颜色 | String  | - | - |