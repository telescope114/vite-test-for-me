import React, { type ReactNode } from 'react'
import MyLayout from './components/organisms/MyLayout'
import './app.less'
// import { Button } from 'antd'

export type appProps = {
  children?: ReactNode
}

const App: React.FC<appProps> = ({ children }) => {
  return (
    <MyLayout>
      {/*<Button type="primary">123</Button>*/}
      { children }
    </MyLayout>
  )
}

export default App
