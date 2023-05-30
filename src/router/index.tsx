import { BrowserRouter, Routes, Route, type RouteObject } from 'react-router-dom'
import React, { type FC, memo } from 'react'
import { authRoutes, noAuthRoutes } from './router.dictionary'

const Router: FC = memo(() => {
  const routes: RouteObject[] = [...Object.values(authRoutes), ...Object.values(noAuthRoutes)]
  return (
    <BrowserRouter>
      <Routes>
        { routes.map(item => (
          <Route key={item.path} path={item.path} element={item.element} />
        )) }
      </Routes>
    </BrowserRouter>
  )
})

Router.displayName = 'Router'
export default Router
