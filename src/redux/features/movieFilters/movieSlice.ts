import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../type";

interface MovieState {
  allMovies: Movie[];
  filteredMovies: Movie[];
  ratingIMDb: number[]; 
}

const initialState: MovieState = {
  allMovies: [],
  filteredMovies: [],
  ratingIMDb: [0, 10],
}
export const movieFilters = createSlice({ 
  name: 'movie',
  initialState,
  reducers: {
    setMovies:(state, action) => {
      state.allMovies = action.payload
      state.filteredMovies = action.payload
    },
    setName:(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase().trim()))
    },
    setYear:(state, action)=>{
      state.filteredMovies = state.allMovies.filter(movie => movie.year === action.payload)
    },
    setGenre:(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.genres.some((genre) => genre.includes(action.payload)))
    },
    setCountries :(state,action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.country.includes(action.payload))
    },
    setEditor:(state, action) => {
      state.filteredMovies = state.allMovies.filter(movie => movie.editor.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase().trim()))
    },
    setRating:(state,action) => {
      state.filteredMovies = action.payload
      const [min, max] = action.payload;
      state.filteredMovies = state.allMovies.filter(movie => movie.rating >= min && movie.rating <= max)
    },
  },
});
export const {setYear,setMovies,setName,setGenre,setCountries,setEditor,setRating} = movieFilters.actions
export default movieFilters.reducer