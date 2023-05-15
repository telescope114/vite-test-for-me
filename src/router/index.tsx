import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'
import React from 'react'
import withoutAuth from './withoutAuth'
import withAuth from './withAuth'
import NotFound from '../pages/notFound'

const routes: RouteObject[] = [
  ...withoutAuth,
  ...withAuth(),
  { path: '/', element: (<Navigate to="/app/aaa"/>) },
  { path: '*', element: (<NotFound />) }
]

const router = createBrowserRouter(routes)

export default router
