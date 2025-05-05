import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { setCountries, setGenre, setMovies, setName, setYear, } from "../../redux/features/movieFilters/movieSlice"; 
import { Movie } from "../../type";
import { RootState } from "../../redux/store";
import { TiArrowSortedUp } from "react-icons/ti";
import { useQuery } from "react-query";
import { getMovies } from "../../service/getMovies";

export const Movies = () => {
  const [nameValue, setNameValue] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedCountries, setSelectedCountries] = useState<string | null>(null);
  const [yearShow, setYearShow] = useState(false);
  const [genreShow, setGenreShow] = useState(false);
  const [countriesShow, setCountriesShow] = useState(false);

  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ["Film"],
    queryFn: getMovies,
  })
  const filteredMovies = useSelector((state: RootState) => state.movieFilters.filteredMovies); 
  
  const yearMovie = Array.from({length:2025 - 1950 + 1}, (_, i) => 2025 - i)
  const genres = ["Action","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","History","Horror","Music","Musical","Mystery","Romance","Sci-Fi","Short","Sport","Superhero","Thriller","War","Western"];
  const countries = [
    "US", "GB", "FR", "DE", "CA", "IN", "JP", "CN", "IT", "ES", 
    "AU", "KR", "MX", "BR", "SE", "DK", "NO", "NL", "HK", "IE", 
    "NZ", "PL", "BE", "FI", "CZ", "GR", "AT", "PT", "CH", "RO", 
    "UA", "IL", "ZA", "TH", "SG", "PH", "TR", "CO", "AR", "EG",
    "CL", "MY", "VE", "PK", "KW", "QA", "SA", "AE", "ID", "NG", 
    "KE", "MO", "TW", "BD", "PE", "KH", "JO", "LV", "LT", "EE", 
    "LU", "MT", "CY", "IS", "MC", "SM", "AD", "LI", "GG", "JE", 
    "IM", "MD", "AO", "ZW", "BI", "NP", "VN", "MK", "BT", "LA", 
    "SI", "HR", "BG", "RS", "AL", "BA", "ME", "MN", "BH", "SD",
    "ML", "AF"
  ];
  const nameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value)
    dispatch(setName(e.target.value))
  }
  useEffect(() => {
    dispatch(setMovies(data)); 
  }, [data, dispatch]);

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={nameValue}
          placeholder="Полное или частичное название"
          onChange={nameChange}
        />
        <div>
          <h4>Год</h4>
          <div className="relative">
            <button type="button" className="flex items-center"  onClick={() => setYearShow(prevState => !prevState)}>
              <p>{selectedYear ?? 'Введите год'}</p>
              <TiArrowSortedUp/>
            </button>
            <div className={` flex-col gap-3 absolute z-10 bg-space-blue text-white p-5 ${yearShow ? 'flex' : 'hidden'}`}>
              {yearShow &&  yearMovie.map((year) => (
                <button type="button" key={year} className="" onClick={() => {dispatch(setYear(year)); setSelectedYear(year);setYearShow(false)}}>{year}</button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4>Жанр фильма</h4>
          <div className="relative">
            <button type="button" className="flex items-center"  onClick={() => setGenreShow(prevState => !prevState)}>
              <p>{selectedGenre ?? 'Введите год'}</p>
              <TiArrowSortedUp/>
            </button>
            <div className={` flex-col gap-3 absolute z-10 bg-space-blue text-white p-5 ${genreShow ? 'flex' : 'hidden'}`}>
              {genreShow &&  genres.map((genre) => (
                <button type="button" key={genre} className="" onClick={() => {dispatch(setGenre(genre)); setSelectedGenre(genre); setGenreShow(false)}}>{genre}</button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4>Страна фильма:</h4>
          <div className="relative">
            <button type="button" className="flex items-center"  onClick={() => setCountriesShow(prevState => !prevState)}>
              <p>{selectedCountries ?? 'Введите год'}</p>
              <TiArrowSortedUp/>
            </button>
            <div className={` flex-col gap-3 absolute z-10 bg-space-blue text-white p-5 ${countriesShow ? 'flex' : 'hidden'}`}>
              {countriesShow &&  countries.map((countrie) => (
                <button type="button" key={countrie} className="" onClick={() => {dispatch(setCountries(countrie)); setSelectedCountries(countrie); setCountriesShow(false)}}>{countrie}</button>
              ))}
            </div>
          </div>
        </div>
        <button type="submit">Поиск</button>
      </form>
      <div>
        {filteredMovies?.map((movie: Movie) => ( 
          <div key={movie.id}>{movie.name}</div>
        ))}
      </div>
    </div>
  );
}; 