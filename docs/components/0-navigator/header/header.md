---
title: header
subtitle: 导航栏
pageClass: custom-page-class
iframe: /header/header.htm
---

# Header 导航栏

## 引入
---
&nbsp;
```js
import { Header } from 'tsvue';
Vue.use(Header);
```

&nbsp;&nbsp;
## 代码演示
---
### 基础用法
&nbsp;
```html
<Header 
    @clickLeft="clickLeftbtn" 
    @clickRight="clickRightbtn"
>
    <span slot="header-left">返回</span>
    <span slot="header-title">标题</span>
    <span slot="header-right">确认</span>
</Header>
```
&nbsp;
```js
export default class HeaderPage extends Vue {
    private clickLeftbtn(evt: any): any {
        alert('点击返回按键');
    }
    private clickRightbtn(evt: any): any {
        alert('点击确认按键');
    }
}
```
&nbsp;&nbsp;
## API
---
### Props
&nbsp;
参数 | 说明 |  类型 | 可选值 | 默认值  
:-: | :-: | :-: | :-: | :-:
showLeftArrow | 是否显示左边返回按键 | Boolean | true/false | true |
fixed | 是否固定在顶部 | Boolean | true/false | false |
textColor | 整体文本颜色 | String | - | -| 
leftTextColor | 左侧文本颜色 | String | - | -| 
titleTextColor | 标题文本颜色 | String | - | -| 
rightTextColor | 右侧文本颜色 | String | - | -| 

### Slot
&nbsp;
名称 | 说明
:-: | :-:
header-left | 自定义左侧区域内容
header-title | 自定义标题内容
header-right | 自定义右侧区域内容

### Events
&nbsp;
事件名称 | 说明 | 回调参数
:-: | :-: | :-: |
clickLeft | 点击左侧按钮时触发 | event: 用户与指针设备( 如鼠标 )交互时发生的常见事件
clickRight | 点击右侧按钮时触发 | event: 用户与指针设备( 如鼠标 )交互时发生的常见事件

