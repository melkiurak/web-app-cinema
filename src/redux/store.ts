import { configureStore } from "@reduxjs/toolkit";
import  movieFilters  from "./features/movieFilters/movieSlice";

export const store = configureStore({
    reducer:{
        movieFilters:  movieFilters
    },
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

