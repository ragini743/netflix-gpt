import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice" ;
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import optionReducer from "./optionalSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer ,
        movies:moviesReducer,
        gpt:gptReducer ,
        config: configReducer ,
        option :optionReducer,
    }
})
export default appStore ;