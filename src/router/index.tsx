import { BrowserRouter, Routes, Route, Navigate, type RouteObject } from 'react-router-dom'
import React, { type FC, memo } from 'react'
import withoutAuth from './withoutAuth'
import withAuth from './withAuth'
import NotFound from '../pages/notFound'
import { authSelector, type authState } from '../recoil/auth'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router'

const Router: FC = memo(() => {
  const [auth, setAuth] = useRecoilState(authSelector)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const authCallback = (newVal: authState) => {
    setAuth(() => newVal)
    useNavigate()('/app/aaa')
  }
  const routes: RouteObject[] = [
    ...withoutAuth(authCallback),
    ...withAuth(auth),
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
