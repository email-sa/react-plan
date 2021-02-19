export default {
  pages: [
    'pages/list/index',
    'pages/index/index',
    'pages/user/index',
  ],
  tabBar:{
    list:[
      {
        iconPath: 'assests/images/home-dark.png',
        selectedIconPath: 'assests/images/home-light.png',
        pagePath: 'pages/index/index',
        text: '首页'
    },
    {
        iconPath: 'assests/images/order-dark.png',
        selectedIconPath: 'assests/images/order-light.png',
        pagePath: 'pages/list/index',
        text: '订单'
    },
    {
        iconPath: 'assests/images/my-dark.png',
        selectedIconPath: 'assests/images/my-light.png',
        pagePath: 'pages/user/index',
        text: '我的'
    }
    ],
    color: '#000',
        selectedColor: '#0077dd',
        backgroundColor: '#fff',
        borderStyle: 'black'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
}
