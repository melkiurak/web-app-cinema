import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Movie } from "../../type";

export const Movies = () => {
  const filteredMovies = useSelector((state: RootState) => state.movieFilters.filteredMovies); 
  return (
    <div className="flex flex-wrap gap-5">
      {filteredMovies?.slice(0, 10).map((movie: Movie) => ( 
        <div className="w-[250px]" key={movie.id}>
          <img src={movie.poster} alt=""/>
          <h4>{movie.name}</h4>
        </div>
      ))}
    </div>
  );
}; 