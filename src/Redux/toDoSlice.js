import { createSlice } from "@reduxjs/toolkit";

const toDoSlice= createSlice({
    name:"todolist",
    initialState:{
        allToDO:[],
        count:0
    },
    reducers:{
        addToDo:(state,action)=>{
            state.allToDO.push(action.payload),
           state.count++
        },
        removeToDoItem:(state,action)=>{
           
            return state.allToDO.filter(item=>item==action.payload)
            
        }
    }
})
export const {addToDo,removeToDoItem} = toDoSlice.actions
export default toDoSlice.reducer