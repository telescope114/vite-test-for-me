import { type RouteObject } from 'react-router'
import { nestComponents } from '../utils/routesUtils'
import MyLayout from '../components/organisms/MyLayout'
import Aaa from '../pages/aaa'
import React from 'react'
import Login from '../pages/login'

export const authRoutes: Record<string, RouteObject> = {
  app: { path: '/app', element: (<MyLayout/>) },
  appAaa: { path: '/app/aaa', element: (nestComponents([MyLayout, Aaa])) }
}

/**
 * 无需身份认证的路由
 */
export const noAuthroutes: Record<string, RouteObject> = {
  login: { path: '/login', element: (<Login />) }
}
