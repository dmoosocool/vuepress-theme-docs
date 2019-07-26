---
title: cascader
subtitle: 多级联动
pageClass: custom-page-class
---
# Cascader 多级联动
---
用于xxxxxxxxxx.
## 引入

&nbsp;
```js
import { Cascader } from 'tsvue';
Vue.use(Cascader);
```

&nbsp;&nbsp;
## 代码演示
### 基础用法
&nbsp;
```vue
<Cascader
    :isShowSelector="options.showSelector"
    :isShowMask="options.showMask"
    :selectItemsDatas="options.address"
    :active="options.active"
    :tabContent="options.tabContent"
    headerLeftTxt="取消"
    headerTitleTxt="请选择省市区"
    headerRightTxt="确定"
    placeholder="省市区"
    @clickConfirmBtn="chooseResult"
    @clickQuitBtn="quitChoose"
>
</Cascader>
```

&nbsp;
```js
export default class CascaderPage extends Vue {
    private options: object = {
        showSelector: false,
        showMask: false,
        tabContent: ['省', '市', '区'],
        address: [
        {
            code: '100000',
            name: '北京市',
            data: [],
        },
        {
            code: '110000',
            name: '广东省',
            data: [{
                code: '110001',
                name: '广州市',
                data: [{
                    code: '110002',
                    name: '越秀区',
                }, {
                    code: '110003',
                    name: '番禺区',
                }, {
                    code: '110004',
                    name: '萝岗区',
                }, {
                    code: '110005',
                    name: '从化区',
                }],
            }],
        },
        {
            code: '120000',
            name: '广西壮族自治区',
            data: [{
                code: '120007',
                name: '柳州市',
                data: [{
                    code: '1000023',
                    name: '滨江区',
                }],
            }, {
                code: '120006',
                name: '南宁市',
                data: [],
            }, {
                code: '120047',
                name: '桂林市',
                data: [{
                    code: '120048',
                    name: '秀峰区',
                }, {
                    code: '120049',
                    name: '象山区',
                }],
            }],
        }],
    }
    private chooseResult(result: any) {
        console.log(result);
    };
    private quitChoose() {
        console.log("点击取消按钮");
    }
};
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
tabContent | 导航文本 | string | - | -| 
headerLeftTxt | 选择面板头部导航左侧文本 | string | - | -| 
headerTitleTxt | 选择面板头部导航标题文本 | string | - | -| 
headerRightTxt | 选择面板头部导航右侧文本 | string | - | -| 
placeholder | 选择输入框标题 | string | - | -|

#### Events
&nbsp;
事件名称 | 说明 | 回调参数
:-: | :-: | :-: |
clickConfirmBtn | 点击右侧确定按钮时触发 | result:选择的结果
clickQuitBtn | 点击左侧取消按钮时触发 | -