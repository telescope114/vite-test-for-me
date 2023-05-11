import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/index'
import { RouterProvider } from 'react-router'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
)
