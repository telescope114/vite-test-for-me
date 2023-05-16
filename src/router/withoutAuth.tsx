import { type RouteObject } from 'react-router'
import Login from '../pages/login'
import React from 'react'

/**
 * 无需身份认证的路由
 */
const routes = ({ authCallback }: any): RouteObject[] => {
  return [
    { path: '/login', element: (<Login authCallback={ authCallback } />) }
  ]
}

export default routes
