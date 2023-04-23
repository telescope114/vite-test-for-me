import { FC } from 'react'
import { Button } from 'antd'
import './App.css'
import { useSelector } from 'react-redux'
import { dispatch } from './store'
import { increment, decrement } from './store/actions/count'
import NotUpdateTest from './pages/NotUpdateTest'

const App: FC = () => {
  const store = useSelector((state: any) => {
    return state
  })
  const setCount = (type: string): void => {
    dispatch({ type })
  }
  return (
    <div className="App">
      <div className="card">
          count is {store.count}
        <Button type="primary" onClick={() => { setCount('increment') }}> + </Button>
        <Button type="primary" onClick={() => { setCount('decrement') }}> - </Button>
      </div>
      <NotUpdateTest />
    </div>
  )
}

export default App
