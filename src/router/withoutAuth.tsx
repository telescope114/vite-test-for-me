import { type RouteObject } from 'react-router'
import Login from '../pages/login'
import React from 'react'

/**
 * 无需身份认证的路由
 */
const routes: RouteObject[] = [
  { path: '/login', element: (<Login />) }
]

export default routes
