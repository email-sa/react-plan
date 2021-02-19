import {
    EDIT_NAME,DELETE_NAME
} from './action-types.js'

export const editName=(type,data)=>{
    return {
        type:EDIT_NAME,data
    }
}

export const deleteName=(type,data)=>{
    return {
        type:DELETE_NAME,data
    }
}