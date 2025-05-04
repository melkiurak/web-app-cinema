import { useDispatch, useSelector } from "react-redux";
import { useMovieQuery } from "../../service/getFilm";
import { ChangeEvent, useEffect, useState } from "react";
import { setMovies, setYear, } from "../../redux/features/movieFilters/movieSlice"; 
import { Movie } from "../../type";
import { RootState } from "../../redux/store";

export const Movies = () => {
  const [yearValue, setYearValue] = useState<number | string>('');
  const dispatch = useDispatch();
  const { data } = useMovieQuery();
  const filteredMovies = useSelector((state: RootState) => state.movieFilters.filteredMovies); 
  console.log(yearValue, data)
  const yearChange = (e:ChangeEvent<HTMLInputElement>) => {
    setYearValue(e.target.value);
    dispatch(setYear(e.target.value))
  }
  
  useEffect(() => {
    dispatch(setMovies(data)); 
  }, [data, dispatch]);
  
  return (
    <div>
      <input
        type="number"
        value={yearValue}
        placeholder="Введите год"
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