import { type RouteObject } from 'react-router'
import MyLayout from '../components/organisms/MyLayout'
import Aaa from '../pages/aaa'
import { nestComponents } from '../utils/routesUtils'
import { type authState } from '../recoil/auth'
import React from 'react'
import { Navigate } from 'react-router-dom'

const routes = (auth: authState | any): RouteObject[] => {
  if (typeof auth.token === 'string' && (auth.token !== '')) {
    console.log(1)
    return [
      { path: '/app/aaa', element: (nestComponents([MyLayout, Aaa])) },
      { path: '/app', element: (<MyLayout/>) }
    ]
  } else {
    console.log(2)
    return [
      { path: '*', element: (<Navigate to="/login" />) }
    ]
  }
}

export default routes
