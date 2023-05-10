import { FC } from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { dispatch } from './store'
import { increment, decrement } from './store/actions/count'
import NotUpdateTest from './pages/NotUpdateTest'
import FormTest from './pages/FormTest'
import TestTwo, { type testTwoProps } from './pages/TestTwo'

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
  const testTwoProps: testTwoProps = {
    h1: 'abcd123',
    h2: 'dcba321',
    h3: 12
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
      <TestTwo {...testTwoProps} />
      {/*<OtherCount />*/}
    </div>
  )
}

export default App
