import {createSlice} from '@reduxjs/toolkit'

export const bagitems=createSlice({
  name:'items',
  initialState:[],
  reducers:{
    Item_add_Initial:(state,action)=>{
       state.push(action.payload)
      
    },
    Remove_add_Initial:(state,action)=>{
      return state.filter((item)=>item.id!==action.payload)
    },
    
  }
})

export const {Item_add_Initial,Remove_add_Initial}=bagitems.actions;
export default  bagitems

