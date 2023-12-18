import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom' // , useNavigate
import './App.css'
import CommonPartPage from '../CommonPartPage/CommonPartPage'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import ProtectRoute from '../ProtectRoute/ProtectRoute'
import PageNotFound from '../PageNotFound/PageNotFound'
import * as auth from '../../utils/Auth'
import { MainApi } from '../../utils/MainApi'
import { baseUrl } from '../../utils/const'
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { useNavigate } from 'react-router-dom'

export default function App() {

  // стейты текущего пользователя
  const [currentUser, getUserInfo] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  const mainApi = new MainApi({
    baseUrl: baseUrl,
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt')
      auth.checkToken(jwt).then((res) => {
        if (res) {
          mainApi.getPageData()
          .then(([user, savedMovies]) => {
            getUserInfo(user.data)
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
          })
          .catch((err) => {
            console.error(`Что-то пошло не так: ${err}`)
          })
        } else {
          return Promise.reject("Токен устарел!")
        }
      }).catch((err) => {
        console.error(`Что-то пошло не так: ${err}`)
      })
    }
  }, [loggedIn])

  const handleAuth = async () => {
    setLoggedIn(true)
    navigate('/movies', {replace: true}) // перешли
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, getUserInfo }}>
      <div className="page">
        <Routes>
          <Route path='/' element={<CommonPartPage element={ Main } loggedIn={ loggedIn } />} />
          <Route path="/movies" element={<ProtectRoute element={ CommonPartPage } page={ Movies } loggedIn={ loggedIn } mainApi = { mainApi } />} />
          <Route path='/saved-movies' element={<ProtectRoute element={ CommonPartPage} page={ SavedMovies } loggedIn={ loggedIn } mainApi = { mainApi } />} />
          <Route path='/signup' element={loggedIn ? <Navigate to="/profile" replace /> : <Register handleAuth={ handleAuth } />} />
          <Route path='/signin' element={loggedIn ? <Navigate to="/profile" replace /> : <Login handleAuth={ handleAuth } />} />
          <Route path='/profile' element={<ProtectRoute element={ Profile } loggedIn={ loggedIn } loggedOut={ setLoggedIn } />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  )
}