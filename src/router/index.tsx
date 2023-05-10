import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React, { type FC } from 'react'
import Login from '../pages/login'
import App from '../App'
import Aaa from '../pages/aaa'

const router: FC = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/" Component={App}>
        <Route path="/aaa" Component={Aaa} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default router
