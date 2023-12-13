function filterFilms (movies, search, short) {
  return movies.filter ( movie => {
    const match = movie.nameRU.toLowerCase().includes(search.toLowerCase())
    const shortTrue = movie.duration <= 45 // короткометражка до 45 минут
    return match && (short ? shortTrue : true)
  })
}

function mathCauntCards (windowWidth) {
  if (windowWidth > 1278) return 12
  else if (windowWidth > 766 && windowWidth <= 1278) return 8
  else return 5
}

function mathAddCards (windowWidth) {
  if (windowWidth > 1278) return 3
  else if (windowWidth > 766 && windowWidth <= 1278) return 2
  else return 2
}

function toHoursAndMinutes(totalMinutes, type) {
  const hours = Math.floor(totalMinutes / 60) 
  const minutes = totalMinutes % 60
  return type 
  ? (hours < 10 ? "0" : "") + hours.toString() + ":" + (minutes < 10 ? "0" : "") + minutes.toString()
  : (hours > 0 ? hours.toString() + "ч " : "") + minutes.toString() + "м "
}

export { filterFilms, mathCauntCards, mathAddCards, toHoursAndMinutes }