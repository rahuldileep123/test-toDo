import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./toDoSlice";

const toDOStore= configureStore({
    reducer:{
       toDoReducer: toDoSlice
    }
})
export default toDOStore