import { useDispatch, useSelector } from "react-redux";
import { useMovieQuery } from "../../service/getFilm";
import { ChangeEvent, useEffect, useState } from "react";
import { setMovies, setYear, } from "../../redux/features/movieFilters/movieSlice"; 
import { Movie } from "../../type";
import { RootState } from "../../redux/store";

export const Movies = () => {
  const [nameValue, setNameValue] = useState('');
  const dispatch = useDispatch();
  const { data } = useMovieQuery();
  const filteredMovies = useSelector((state: RootState) => state.movieFilters.filteredMovies); 

  const yearChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
    dispatch(setYear(e.target.value))
  }

  useEffect(() => {
    dispatch(setMovies(data)); 
  }, [data, dispatch]);
  
  return (
    <div>
      <input
        type="text"
        value={nameValue}
        placeholder="Полное или частичное название"
        onChange={yearChange}
      />
      <div>
        {filteredMovies?.map((movie: Movie) => ( 
          <div key={movie.id}>{movie.primaryTitle} ({movie.startYear})</div>
        ))}
      </div>
    </div>
  );
};