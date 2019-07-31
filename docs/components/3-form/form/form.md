---
title: Form
subtitle: 表单
pageClass: custom-page-class
---
# Form 表单组件
---
将组件内的用户输入的值提交。由于小程序组件化的限制，要触发onSubmit，必须使用AtButton 且设置 `formType='submit'`，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取

## 使用指南
在 Taro 文件中引入组件
```javascript
import { AtForm } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```javascript
@import "~taro-ui/dist/style/components/form.scss";
```

## 一般用法
```javascript
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'
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
  }
  onSubmit (event) {
    console.log(event)
  }
  onReset (event) {
    console.log(event)
  }
  render () {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          name='value'
          title='文本'
          type='text'
          placeholder='单行文本'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    )
  }
}
```