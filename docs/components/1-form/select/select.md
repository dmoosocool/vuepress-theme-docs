---
title: select
subtitle: 选择框
pageClass: custom-page-class
---

### Select
### 引入
---
&nbsp;
```js
import { Select } from 'tsvue';
Vue.use(Select);
```

&nbsp;&nbsp;
### 代码演示
---
#### 基础用法
&nbsp;
```html
<Select 
    :isShowSelector="showSelector"
    :isShowMask="showMask"
    :selectItemsDatas="edu"
    headerLeftTxt="取消"
    headerTitleTxt="请选择学历"
    headerRightTxt="确定"
    placeholder="学历"
    @clickConfirmBtn="chooseResult"
    @clickQuitBtn="quitChoose"
>
</Select>
```
&nbsp;
```js
export default class SelectPage extends Vue {
    private showSelector: boolean = false;
    private showMask: boolean = false;
    private edu: any[] = [
        { code: '01', name: '高中' },
        { code: '02', name: '本科' },
        { code: '03', name: '专科' },
        { code: '04', name: '初中' },
        { code: '05', name: '硕士' },
        { code: '06', name: '博士' },
        { code: '07', name: '小学' },
        { code: '08', name: '其他' },
    ];
    private chooseResult(result: any) {
        console.log(result);
    }
    private quitChoose() {
        console.log('quit choose');
    }
}
```
&nbsp;

### API
---
#### Props
&nbsp;
参数 | 说明 |  类型 | 可选值 | 默认值  
:-: | :-: | :-: | :-: | :-:
isShowSelector | 是否显示选择面板 | Boolean | true/false | false |
isShowMask | 是否显示遮罩层 | Boolean | true/false | false |
selectItemsDatas | 数据集合 | Array | - | -| 
headerLeftTxt | 选择面板头部导航左侧文本 | string | - | -| 
headerTitleTxt | 选择面板头部导航标题文本 | string | - | -| 
headerRightTxt | 选择面板头部导航右侧文本 | string | - | -| 
placeholder | 选择输入框标题 | string | - | -|

#### Events
&nbsp;
事件名称 | 说明 | 回调参数
:-: | :-: | :-: |
clickConfirmBtn | 点击左侧确定按钮时触发 | result:选择的结果
clickQuitBtn | 点击左侧取消按钮时触发 | -