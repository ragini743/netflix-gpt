import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const userSlice = createSlice({
    name:"user",
    initialState :null ,
    userName:false,
    option:false,
    reducers:{
        addUser:(state,action)=>{
            return action.payload ;
        } ,
        removeUser:(state,action) =>{
            return null;
        },
        toggleUserName:(state,action) =>{
            state.userName = !state.userName
        },
        toggleOption :(state,action) =>{
            state.option= !state.option
        }

    }
}) ;

export const {addUser,removeUser ,toggleUserName ,toggleOption} = userSlice.actions;

export default userSlice.reducer ;