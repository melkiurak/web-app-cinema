import { configureStore } from "@reduxjs/toolkit";
import  movieFilters  from "./features/movieFilters/movieSlice";
import { firebaseApi } from "../service/getMovies";
export const store = configureStore({
    reducer:{
        movieFilters:  movieFilters,
        [firebaseApi.reducerPath]: firebaseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firebaseApi.middleware)
})

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

