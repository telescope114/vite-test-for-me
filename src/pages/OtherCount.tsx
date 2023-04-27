import { FC, memo } from 'react'
import { useRecoilState } from 'recoil'
import { countSelector, countStore } from '../recoil/CountRecoil'
import { Button } from 'antd'

const OtherCount: FC = memo(() => {
  const [selector, setSelector] = useRecoilState<countStore>(countSelector)
  const increment = (): void => {
    setSelector({ count: selector.count + 1 })
  }
  const decrement = (): void => {
    setSelector({ count: selector.count - 1 })
  }
  return (<>
    <div>{selector.count}</div>
    <Button onClick={increment}>+</Button>
    <Button onClick={decrement}>-</Button>
  </>)
})

export default OtherCount
