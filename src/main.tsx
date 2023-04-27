import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import store from './store'
import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux'
// import OtherCount from './pages/OtherCount'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <App />
        {/*<OtherCount />*/}
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
)
