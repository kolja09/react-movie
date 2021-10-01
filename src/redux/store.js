import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from './reducer/movieSlice'

export const store = configureStore({
    reducer:{
       movies: moviesReducer,
    }
})