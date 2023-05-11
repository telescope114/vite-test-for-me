import {createBrowserRouter, Navigate} from 'react-router-dom'
import React from 'react'
import Login from '../pages/login'
import App from '../App'
import NotFound from '../pages/notFound'

const router = createBrowserRouter([
  { path: '/login', element: (<Login />) },
  { path: '/app', element: (<App/>)},
  { path: '/', element: (<Navigate to="/app"/>) },
  { path: '*', element: (<NotFound />) }
])

export default router
