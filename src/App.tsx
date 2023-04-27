import { FC } from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { dispatch } from './store'
import { increment, decrement } from './store/actions/count'
import NotUpdateTest from './pages/NotUpdateTest'
import FormTest from './pages/FormTest'
import OtherCount from './pages/OtherCount'

const App: FC = () => {
  const store = useSelector((state: any) => {
    return state
  })
  const setCount = (type: string): void => {
    switch (type) {
      case 'increment': dispatch(increment())
        break
      case 'decrement': dispatch(decrement())
        break
      default: break
    }
  }
  return (
    <div className="App">
      <div className="card">
          count is {store.count}
      </div>
      <Button type="primary" onClick={() => { setCount('increment') }}> + </Button>
      <Button type="primary" onClick={() => { setCount('decrement') }}> - </Button>
      <NotUpdateTest />
      <FormTest />
      <OtherCount />
    </div>
  )
}

export default App
