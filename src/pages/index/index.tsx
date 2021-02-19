import React, { Component } from 'react'
import { Button, View, Text,Swiper, SwiperItem } from '@tarojs/components'
import { AtGrid,AtNoticebar, AtModal, AtModalHeader, AtModalContent, AtModalAction,AtForm,
  AtInput,  } from "taro-ui"

import "taro-ui/dist/style/components/button.scss" // 按需引入

import './index.scss'

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      isOpened:false,
      value:''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleConfirm=()=>{

  }
  handleCancel=()=>{

  }
  handleClose=()=>{

  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  onSubmit (event) {
    console.log(this.state.value)
  }
  onReset (event) {
    this.setState({
      value: '',
    })
  }

  clickGrad=(item,index)=>{
    switch(index){
      case 0:
        console.log('dianji点击了',item,index)
        this.setState({isOpened:true})

        break;
    }
  }

  render () {
   
    const vStyleC = {
      height: '150px',
      'background-color': 'rgb(241,241,241)',
      color: '#333'
    }
    const gradList = [
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '领取中心'
      },
      {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '找折扣'
      },
      {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '领会员'
      },
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: '新品首发'
      },
      {
        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: '领京豆'
      },
      {
        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: '手机馆'
      }
    ]

    return (
      <View className='index'>
        <View>
        <AtNoticebar marquee icon='volume-plus'>好消息，好消息，全场五折起</AtNoticebar>
          <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
            <SwiperItem>
              <View className='demo-text-1'>
                <Text>1</Text>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>3</View>
            </SwiperItem>
          </Swiper>
        </View>
        <AtGrid data={gradList} onClick={this.clickGrad}/>
        <AtModal isOpened={this.state.isOpened} >
          <AtModalHeader>标题</AtModalHeader>
          <AtModalContent>
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
               onChange={this.handleChange.bind(this, 'value')} 
             />
           </AtForm>
          </AtModalContent>
          <AtModalAction> 
            <Button>取消</Button> 
            <Button>确定</Button> 
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
