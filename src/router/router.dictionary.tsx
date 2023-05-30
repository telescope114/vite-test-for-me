import { type RouteObject } from 'react-router'
import { nestComponents } from '../utils/routesUtils'
import MyLayout from '../components/organisms/MyLayout'
import Aaa from '../pages/app/aaa'
import A2 from '../pages/app/a2'
import React from 'react'
import Login from '../pages/login'
import { Navigate } from 'react-router-dom'
import Test from '../pages/test'

export const authRoutes: Record<string, RouteObject> = {
  app: { path: '/app', element: (<MyLayout/>) },
  appTest: { path: '/app/test', element: (nestComponents([MyLayout, Test])) },
  appAaa: { path: '/app/aaa', element: (nestComponents([MyLayout, Aaa])) },
  appA2: { path: '/app/a2', element: (nestComponents([MyLayout, A2])) }
}

/**
 * 无需身份认证的路由
 */
export const noAuthRoutes: Record<string, RouteObject> = {
  login: { path: '/login', element: (<Login />) },
  default: { path: '/', element: (<Navigate to='app' />) }
}
