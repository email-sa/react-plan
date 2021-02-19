import {
    EDIT_NAME,DELETE_NAME
} from './../action-types'

const initialState='张三'
const myName = function(state=initialState, action){
    console.log('action',action.type);
    
switch(action.type){
    case EDIT_NAME:
        return state+'e'
        case DELETE_NAME:
            return state+'d'
        default:
             return initialState
}
}

export default myName