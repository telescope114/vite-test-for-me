import { BrowserRouter, Routes, Route, Navigate, type RouteObject } from 'react-router-dom'
import React, { type FC, memo, useCallback } from 'react'
import withoutAuth from './withoutAuth'
import withAuth from './withAuth'
import NotFound from '../pages/notFound'
import { authSelector, type authState } from '../recoil/auth'
import { useRecoilState } from 'recoil'

const Router: FC = memo(() => {
  const [auth, setAuth] = useRecoilState(authSelector)
  const authCallback = useCallback((newVal: authState) => {
    setAuth(newVal)
  }, [auth()])
  const routes: RouteObject[] = [
    ...withoutAuth(authCallback),
    ...withAuth(auth()),
    { path: '/', element: (<Navigate to="/app/aaa"/>) },
    { path: '*', element: (<NotFound />) }
  ]
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
