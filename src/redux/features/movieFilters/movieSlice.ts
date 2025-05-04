import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../type";

interface MovieState {
  allMovies: Movie[];
  filteredMovies: Movie[];
}

const initialState: MovieState = {
  allMovies: [],
  filteredMovies: [],
};

export const movieFilters = createSlice({ 
  name: 'movie',
  initialState,
  reducers: {
    setMovies:(state, action) => {
      state.allMovies = action.payload
      state.filteredMovies = action.payload
    },
    setYear:(state, action)=>{
      state.filteredMovies = state.allMovies.filter(movie => movie.startYear === action.payload)
      console.log(state.filteredMovies);

    },
  }
});
export const {setYear,setMovies} = movieFilters.actions
export default movieFilters.reducer