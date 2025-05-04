import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../type";

interface MovieState {
  movie: Movie[];
}

const initialState: MovieState = {
  movie: []
};

export const movieFilters = createSlice({ 
  name: 'movie',
  initialState,
  reducers: {
    setyear:(state, action)=>{
        state.movie = action.payload
    },
  }
});
export const {setyear} = movieFilters.actions
export default movieFilters.reducer