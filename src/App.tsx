import React from 'react';
import MyLayout from './components/organisms/MyLayout'
import './app.less'
import { Button } from "antd";

const App: React.FC = () => {
  return (
    <MyLayout>
      <Button type="primary">123</Button>
    </MyLayout>
  )
}

export default App
