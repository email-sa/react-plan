import React, { Component } from 'react'
import { View } from '@tarojs/components'

import './app.scss'
import { Provider} from 'react-redux'
import configureStore from './redux/sotre'

const store = configureStore()
class App extends Component {
  
  onLaunch(){
    console.log('onLaunch2')
  }
  componentDidMount () {}

  componentDidShow () {
    console.log('componentDidShow');
    
  }

  componentDidHide () {
    console.log('componentDidHide');
    
  }

  componentDidCatchError () {}
  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <View>
        <Provider store={store}>{this.props.children}</Provider>
      </View>
      )
  }
}

export default App
