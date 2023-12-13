import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'

import CommonPartPage from '../CommonPartPage/CommonPartPage'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import PageNotFound from '../PageNotFound/PageNotFound'

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<CommonPartPage element={ Main } />} />
        <Route path='/movies' element={<CommonPartPage element={ Movies } />} />
        <Route path='/saved-movies' element={<CommonPartPage element={ SavedMovies } />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App