import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk' // 在reducer中运行异步代码的中间件
import reducer from './reducer'



//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore)

  export default function configureStore(initialState){
      const store = createStoreWithMiddleware(reducer,initialState)
       //热替换选项
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers/combin-reducers', () => {
//       const nextReducer = require('./reducers/combin-reducers')
//       store.replaceReducer(nextReducer)
//     })
//   }

return store
  }

