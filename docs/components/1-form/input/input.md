---
title: input
subtitle: 输入框
pageClass: custom-page-class
iframe: /input/input.htm
---

### Input 输入框
---
针对不同需求提供的输入框组件

#### 使用指南
>
```js
import { Input } from 'tsvue';
Vue.component(Input.name, Input);
```
#### 一般用法 
>
```vue
<input
  @input="handleInput"
  @focus="handleFocus"
  @blur="handleBlur"
  :type="type"
  :maxlength="maxlength"
  :minlength="minlength"
  :placeholder="placeholder"
  :value="value"
  :disabled="disabled"
  :readonly="readonly"
/>
```
### API
---
#### Props
&nbsp;
参数 | 说明 |  类型 | 可选值 | 默认值  
:-: | :-: | :-: | :-: | :-:
type | 输入框类型 | String | password | - |
maxlength | 能输入最大长度 | Number | - | - |
minlength | 能输入最小长度 | Number | - | - |
placeholder | 输入框提示信息 | String | - | - | 
value | 输入值 | String | - | - | 
disabled | 禁用输入框 | - | - | -| 
readonly | 输入框状态为只读 | - | - | - | 
backgroundColor | 输入框背景色 | string | - | - | 
isClearable | 是否显示一键删除 | Boolean | true/false | false |

#### Events
&nbsp;
事件名称 | 说明 | 回调参数
:-: | :-: | :-: |
input | 输入时触发 | -
focus | 聚焦时触发 | -
blur  | 失焦时触发 | -
click | 点击时触发 | -