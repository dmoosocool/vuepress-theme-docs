---
title: Input
subtitle: 按钮
pageClass: custom-page-class
iframe: /h5/index.html#/pages/form/input/index
---
# Input 按钮
---
用于接受单行文本，支持文本、密码、数字、手机号码、银行卡等类型的输入。
用户可控制是否显示输入框标题，是否出现清除按钮，输入框状态，还可以自定义 Input 组件的右边栏，实现自定义按钮、验证码输入框等。

## 使用指南
在 Taro 文件中引入组件
```javascript
import { AtInput, AtForm } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**
```javascript
@import "~taro-ui/dist/style/components/input.scss";
@import "~taro-ui/dist/style/components/icon.scss";
```

## 一般用法
说明：
- 由于微信开发者工具的问题，Input 的 placeholder 在 value 存在的情况下，会出现重叠，在真机上不会出现此问题，可以忽略
- 由于微信开发者工具的问题，输入法输入中文的时候，maxLength 会限制输入过程中的字符，导致无法输入完整的中文，在真机上不会出现此问题，可以忽略
- 该组件为受控组件，开发者需要通过 onChange 事件来更新 value 值变化，value 与 onChange 函数必填。在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
- 由于小程序组件化的限制，AtInput 嵌套在 AtForm 或原生小程序组件 Form 中的时候，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取
- 由于此组件是基于小程序的 Input 进行封装，该组件是原生组件，使用前请阅读[使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)
```javascript
import Taro from '@tarojs/taro'
import { AtInput }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  render () {
    return (
      <AtInput
        name='value'
        title='标准五个字'
        type='text'
        placeholder='标准五个字'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}
```

## 不同输入框类型
```jsx
<AtForm>
  <AtInput
    name='value1'
    title='文本'
    type='text'
    placeholder='单行文本'
    value={this.state.value1}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value2'
    title='数字'
    type='number'
    placeholder='请输入数字'
    value={this.state.value2}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value3'
    title='密码'
    type='password'
    placeholder='密码不能少于10位数'
    value={this.state.value3}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value4'
    title='身份证'
    type='idcard'
    placeholder='身份证号码'
    value={this.state.value4}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value5'
    title='小数'
    type='digit'
    placeholder='请输入小数'
    value={this.state.value5}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value6'
    border={false}
    title='手机号码'
    type='phone'
    placeholder='手机号码'
    value={this.state.value6}
    onChange={this.handleChange.bind(this)}
  />
</AtForm>
```

## 不同状态
```jsx
<AtForm>
  <AtInput
    disabled
    title='禁用'
    type='text'
    placeholder='禁止输入'
    value={this.state.value1}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    error
    title='出现错误'
    type='text'
    placeholder='点击按钮触发回调'
    value={this.state.value2}
    onChange={this.handleChange}
    onErrorClick={this.handleClick.bind(this)}
  />
  <AtInput
    editable={false}
    title='不可编辑'
    type='text'
    placeholder='不可编辑'
    value={this.state.value3}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    clear
    border={false}
    title='清除按钮'
    placeholder='点击清除按钮清空内容'
    type='text'
    value={this.state.value4}
    onChange={this.handleChange.bind(this)}
  />
</AtForm>
```
## 自定义右边栏

```jsx
<AtInput
  clear
  title='验证码'
  type='text'
  maxLength='4'
  placeholder='验证码'
  value={this.state.value}
  onChange={this.handleChange.bind(this)}
>
  <Image src='https://aotu.io/img.png' />
</AtInput>
```