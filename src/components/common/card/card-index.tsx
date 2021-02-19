import React, { Component } from 'react'
import { View, Text,Swiper, SwiperItem } from '@tarojs/components'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './card-index.scss'

export default function CardIndex(props) {


    return (
      <View className='my-card-index'>
        <Text className="my-card-title">{props.title}</Text>
        {props.children}
      </View>
    )
}
