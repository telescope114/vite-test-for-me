import { useState } from 'react'
import { Button } from 'antd'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const onClickCount = () => {
    setCount((count) => count + 1)
  }
  return (
    <div className="App">
      <div className="card">
        <Button onClick={onClickCount}>
          count is {count}
        </Button>
      </div>
    </div>
  )
}

export default App
