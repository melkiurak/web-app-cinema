import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { setCountries, setEditor, setGenre, setMovies, setName, setRating, setYear, } from "../../redux/features/movieFilters/movieSlice"; 
import { Movie } from "../../type";
import { RootState } from "../../redux/store";
import { TiArrowSortedUp } from "react-icons/ti";
import { useQuery } from "react-query";
import { getMovies } from "../../service/getMovies";
import { Slider } from "@mui/material";

export const Movies = () => {
  const [nameValue, setNameValue] = useState('');
  const [editorValue, setEditorValue] = useState('');
  const [ratingValue, setRatingValue] = useState<number[]>([0, 10]);
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
  const genres = [
    "Боевик",
    "Приключения",
    "Анимация",
    "Биография",
    "Комедия",
    "Криминал",
    "Документальный",
    "Драма",
    "Семейный",
    "Фэнтези",
    "Нуар",
    "История",
    "Ужасы",
    "Музыка",
    "Мюзикл",
    "Мистика",
    "Романтика",
    "Фантастика",
    "Короткометражка",
    "Спорт",
    "Супергерои",
    "Триллер",
    "Война",
    "Вестерн"
  ];
  const countries = [
    "США", "Великобритания", "Франция", "Германия", "Канада", "Индия", "Япония", "Китай", "Италия", "Испания", 
    "Австралия", "Южная Корея", "Мексика", "Бразилия", "Швеция", "Дания", "Норвегия", "Нидерланды", "Гонконг", 
    "Ирландия", "Новая Зеландия", "Польша", "Бельгия", "Финляндия", "Чехия", "Греция", "Австрия", "Португалия", 
    "Швейцария", "Румыния", "Украина", "Израиль", "ЮАР", "Таиланд", "Сингапур", "Филиппины", "Турция", "Колумбия", 
    "Аргентина", "Египет","Чили", "Малайзия", "Венесуэла", "Пакистан", "Кувейт", "Катар", "Саудовская Аравия", "ОАЭ", 
    "Индонезия", "Нигерия", "Кения", "Макао", "Тайвань", "Бангладеш", "Перу", "Камбоджа", "Иордания", "Латвия", "Литва", 
    "Эстония", "Люксембург", "Мальта", "Кипр", "Исландия", "Монако", "Сан-Марино", "Андорра", "Лихтенштейн", "Гернси", "Джерси", 
    "Мэн", "Молдова", "Ангола", "Зимбабве", "Бурунди", "Непал", "Вьетнам", "Македония", "Бутан", "Лаос", "Словения", "Хорватия", 
    "Болгария", "Сербия", "Албания", "Босния и Герцеговина", "Черногория", "Монголия", "Бахрейн", "Судан", "Мали", "Афганистан"
  ];

  const nameSearch = (e:ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value)
    dispatch(setName(e.target.value))
  }
  const editroSearch = (e:ChangeEvent<HTMLInputElement>) => {
    setEditorValue(e.target.value)
    dispatch(setEditor(e.target.value))
  }
  const retingSearch = (e: Event, newValue: number[]) => {
    setRatingValue(newValue)
    dispatch(setRating(newValue))
  }
  useEffect(() => {
    dispatch(setMovies(data)); 
  }, [data, dispatch]);
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-dark-navy p-[42px] rounded-[10px]">
        <form action="" className="flex gap-10 flex-wrap ">
          <div className="filter max-w-[458px] w-full">
            <h4 className="filter_h4">Навзание фильма</h4>
            <input
              type="text"
              value={nameValue}
              placeholder="Полное или частичное название"
              onChange={nameSearch}
              className="py-[22px] pl-[27px] w-full"
            />
          </div>
          <div className="filter">
            <h4 className="filter_h4">Год</h4>
            <div className="relative filter__select">
              <button type="button" className="flex items-center gap-5"  onClick={() => setYearShow(prevState => !prevState)}>
                <p>{selectedYear ?? 'Введите год'}</p>
                <TiArrowSortedUp/>
              </button>
              <div className={` w-full left-0 top-[100px] flex-col gap-3 absolute z-10 bg-space-blue text-white p-5 ${yearShow ? 'flex' : 'hidden'}`}>
                {yearShow &&  yearMovie.map((year) => (
                  <button type="button" key={year} className="" onClick={() => {dispatch(setYear(year)); setSelectedYear(year);setYearShow(false)}}>{year}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="filter">
            <h4 className="filter_h4">Жанр фильма</h4>
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
          <div className="filter">
            <h4 className="filter_h4">Страна фильма:</h4>
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
          <div className="filter max-w-[458px] w-full">
            <h4 className="filter_h4">Создатели</h4>
            <input
              type="text"
              value={editorValue}
              placeholder="Продюсор"
              onChange={editroSearch}
              className="py-[22px] pl-[27px] w-full"
            />
          </div>
          <div className="flex flex-col max-w-[655px] w-full">
            <div className="flex gap-3">
              <input type='radio' />
              <span>Оценка IMDb</span>
            </div>
            <div className="w-full">
              <Slider getAriaLabel={() => 'Temperature range'} valueLabelDisplay="auto" value={ratingValue} onChange={retingSearch} min={0} max={10}/>
              <div className="w-full flex justify-between">{Array.from({length: 11}, (_, i) => (
                <span key={i} className="text-[#A5A8AF] font-medium-Qanelas text-[17px]">{i}</span>
                ))}
              </div>
            </div>
          </div>
          <button type="submit">Поиск</button>
        </form>
      </div>
      <div className="flex flex-wrap gap-5">
        {filteredMovies?.slice(0, 10).map((movie: Movie) => ( 
          <div className="w-[250px]" key={movie.id}>
            <img src={movie.poster} alt=""/>
            <h4>{movie.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}; 