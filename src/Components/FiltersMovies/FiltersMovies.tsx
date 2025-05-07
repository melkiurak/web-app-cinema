import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetMoviesQuery } from "../../service/getMovies";
import { setCountries, setEditor, setGenre, setMovies, setName, setRating, setYear } from "../../redux/features/movieFilters/movieSlice";
import { Slider } from "@mui/material";
import { CustomAutocomplete } from "../UI/CustomAutocomplete";


export const FiltersMovies = () => {
  const [nameValue, setNameValue] = useState('');
  const [editorValue, setEditorValue] = useState('');
  const [ratingValue, setRatingValue] = useState<number[]>([0, 10]);
  const dispatch = useDispatch();
  
  const { data: allmovies, isLoading, isError } = useGetMoviesQuery(null);
  
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
    dispatch(setMovies(allmovies)); 
  }, [allmovies, dispatch]);
  if (isLoading) {
    return <div>Загрузка фильмов...</div>;
  }
  if (isError) {
    return <div>Ошибка загрузки фильмов:</div>;
  }
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
            <h4 className="filter_h4">Год:</h4>
            <CustomAutocomplete options={yearMovie} label="Год" onChange={(_,value) => {if (value !== null) {dispatch(setYear(value))}}}/>
          </div>
          <div className="filter">
            <h4 className="filter_h4">Жанр фильма:</h4>
            <CustomAutocomplete options={genres} label="Жанры" onChange={(_,value) => {if (value !== null) {dispatch(setGenre(value))}}}/>
          </div>
          <div className="filter">
            <h4 className="filter_h4">Страна фильма:</h4>
            <CustomAutocomplete options={countries} label="Страны" onChange={(_,value) => {if (value !== null) {dispatch(setCountries(value))}}}/>
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
    </div>
  );
}; 