import movieImage1 from '../images/movies/33 слова о дизайне.png'
import movieImage2 from '../images/movies/Киноальманах «100 лет дизайна».png'
import movieImage3 from '../images/movies/В погоне за Бенкси.png'
import movieImage4 from '../images/movies/Баския Взрыв реальности.png'
import movieImage5 from '../images/movies/Бег это свобода.png'
import movieImage6 from '../images/movies/Книготорговцы.png'
import movieImage7 from '../images/movies/Когда я думаю о Германии ночью.png'
import movieImage8 from '../images/movies/Gimme Danger История Игги и The Stooge....png'
import movieImage9 from '../images/movies/Дженис Маленькая девочка грустит.png'
import movieImage10 from '../images/movies/Соберись перед прыжком.png'
import movieImage11 from '../images/movies/Пи Джей Харви A dog called money.png'
import movieImage12 from '../images/movies/По волнам Искусство звука в кино.png'


const moviesData = [
  {
    image: movieImage1,
    name: '33 слова о дизайне',
    length: '1ч 47м',
    savedStatus: true,
  },
  {
    image: movieImage2,
    name: 'Киноальманах «100 лет дизайна»',
    length: '1ч 3м',
    savedStatus: false,
  },
  {
    image: movieImage3,
    name: 'В погоне за Бенкси',
    length: '1ч 42м',
    savedStatus: false,
  },
  {
    image: movieImage4,
    name: 'Баския Взрыв реальности',
    length: '1ч 21м',
    savedStatus: false,
  },
  {
    image: movieImage5,
    name: 'Бег это свобода',
    length: '1ч 44м',
    savedStatus: false,
  },
  {
    image: movieImage6,
    name: 'Книготорговцы',
    length: '1ч 37м',
    savedStatus: true,
  },
  {
    image: movieImage7,
    name: 'Когда я думаю о Германии ночью',
    length: '1ч 56м',
    savedStatus: false,
  },
  {
    image: movieImage8,
    name: 'Gimme Danger: История Игги и The Stooges',
    length: '1ч 59м',
    savedStatus: false,
  },
  {
    image: movieImage9,
    name: 'Дженис: Маленькая девочка грустит',
    length: '1ч 42м',
    savedStatus: true,
  },
  {
    image: movieImage10,
    name: 'Соберись перед прыжком',
    length: '1ч 10м',
    savedStatus: true,
  },
  {
    image: movieImage11,
    name: 'Пи Джей Харви: A dog called money',
    length: '1ч 4м',
    savedStatus: false,
  },
  {
    image: movieImage12,
    name: 'По волнам: Искусство звука в кино',
    length: '1ч 7м',
    savedStatus: false,
  },
]

const savedMoviesData = [
  {
    image: movieImage1,
    name: '33 слова о дизайне',
    length: '1ч 47м',
  },
  {
    image: movieImage6,
    name: 'Книготорговцы',
    length: '1ч 37м',
  },
	{
    image: movieImage9,
    name: 'Дженис: Маленькая девочка грустит',
    length: '1ч 42м',
  },
  {
    image: movieImage10,
    name: 'Соберись перед прыжком',
    length: '1ч 10м',
  },
]

export { moviesData, savedMoviesData }