import { type RouteObject } from 'react-router'
import MyLayout from '../components/organisms/MyLayout'
import Aaa from '../pages/aaa'
import { nestComponents } from '../utils/routesUtils'
import React from 'react'

const routes = (): RouteObject[] => {
  return (
    [
      { path: '/app/aaa', element: (nestComponents([MyLayout, Aaa])) },
      { path: '/app', element: (<MyLayout/>) }
    ]
  )
}

export default routes
