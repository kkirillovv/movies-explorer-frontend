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
import { mainApi } from '../../utils/MainApi'
import { CurrentUserContext } from '../../context/CurrentUserContext'

export default function App() {

  // стейты текущего пользователя
  const [currentUser, getUserInfo] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt')
      auth.checkToken(jwt).then((res) => {
        if (res) {
          handleAuth()
        } else {
          return Promise.reject("Токен устарел!")
        }
      }).catch((err) => {
        console.error(`Что-то пошло не так: ${err}`)
      })
    }
  }, [])

  const handleAuth = () => {
    mainApi.getPageData()
    .then(([user, savedMovies]) => {
      getUserInfo(user.data)
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
      setLoggedIn(true)
    })
    .catch((err) => {
      console.error(`Что-то пошло не так: ${err}`)
    })
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, getUserInfo }}>
      <div className="page">
        <Routes>
          <Route path='/' element={<CommonPartPage element={ Main } loggedIn={ loggedIn } />} />
          <Route path="/movies" element={<ProtectRoute element={ CommonPartPage } page={ Movies } loggedIn={ loggedIn } />} />
          <Route path='/saved-movies' element={<ProtectRoute element={ CommonPartPage} page={ SavedMovies } loggedIn={ loggedIn } />} />
          <Route path='/signup' element={loggedIn ? <Navigate to="/profile" replace /> : <Register handleAuth={ handleAuth } />} />
          <Route path='/signin' element={loggedIn ? <Navigate to="/profile" replace /> : <Login handleAuth={ handleAuth } />} />
          <Route path='/profile' element={<ProtectRoute element={ Profile } loggedIn={ loggedIn } loggedOut={ setLoggedIn } />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  )
}