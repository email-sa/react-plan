import React, { Component } from 'react'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import{connect} from 'react-redux'
import {
  editName,deleteName
} from './../../redux/actions'
import PropTypes from 'prop-types'

import { AtForm, AtInput, AtButton } from 'taro-ui'
 class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleChange (value) {
    this.props.editName(value)
  }
 
  render () {
    console.log(this,'111')
    return (
      <AtForm
      >
        <AtInput 
          name='value' 
          title='文本' 
          type='text' 
          placeholder='单行文本' 
          value={this.props.myName} 
          onChange={this.handleChange.bind(this, 'value')} 
        />
        <AtButton onClick={()=>this.props.editName(this.props.myName)}>提交</AtButton>
        <AtButton onClick={()=>this.props.deleteName(this.props.myName)}>重置</AtButton>
      </AtForm>
    )
  }
}

export default connect((state)=>{
  console.log(state,222)
 return {myName:state.myName}
},{
  editName,deleteName
})(List)