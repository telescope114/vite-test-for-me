import { createBrowserRouter, Navigate } from 'react-router-dom'
import React, { type ReactNode, type ElementType } from 'react'
import Login from '../pages/login'
import MyLayout from '../components/organisms/MyLayout'
import NotFound from '../pages/notFound'
import Aaa from '../pages/aaa'

const nestComponents = (components: ElementType[]): ReactNode => {
  if (components.length <= 0) {
    return null
  }
  const [FirstComponent, ...rest] = components
  return (
    <FirstComponent>{ nestComponents(rest) }</FirstComponent>
  )
}

const router = createBrowserRouter([
  { path: '/login', element: (<Login />) },
  { path: '/app/aaa', element: (nestComponents([MyLayout, Aaa])) },
  { path: '/app', element: (<MyLayout/>) },
  { path: '/', element: (<Navigate to="/app"/>) },
  { path: '*', element: (<NotFound />) }
])

export default router
