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
    setName:(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.primaryTitle === action.payload)
    },
    setYear:(state, action)=>{
      state.filteredMovies = state.allMovies.filter(movie => movie.startYear === action.payload)
    },
    setGenre:(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.primaryTitle === action.payload)
    },
    setCountries :(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.primaryTitle === action.payload)
    },
    setRekeaseDate:(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.primaryTitle === action.payload)
    },
    setRating:(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.primaryTitle === action.payload)
    },
    setBudget:(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.primaryTitle === action.payload)
    },
    setAvarageRating:(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.primaryTitle === action.payload)
    },
    setType:(state, action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.primaryTitle === action.payload)
    },
  }
});
export const {setYear,setMovies,setName} = movieFilters.actions
export default movieFilters.reducer