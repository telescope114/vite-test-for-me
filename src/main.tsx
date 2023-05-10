import React from 'react'
import ReactDOM from 'react-dom/client'
import OtherCount from './pages/OtherCount'
import App from './App'
import store from './store'
import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <App />
        <OtherCount />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>
)
