// import { useState } from 'react'
import { Button } from 'antd'
import './App.css'
import { useSelector } from 'react-redux'
import store from './store'

function App() {
  const countStore = useSelector((state: any) => {
    return state
  })
  const setCount = (type: string): void => {
    store.dispatch({ type })
  }
  return (
    <div className="App">
      <div className="card">
          count is {countStore.count}
        <Button type="primary" onClick={() => { setCount('increment') }}> + </Button>
        <Button type="primary" onClick={() => { setCount('decrement') }}> - </Button>
      </div>
    </div>
  )
}

export default App
