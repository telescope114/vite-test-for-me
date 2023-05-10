import React, { type FC, memo, useState, useCallback } from 'react'
import Child, { type props } from './Child'

const Parent: FC = memo(() => {
  const [count, setCount] = useState<number>(0)
  const childrenProps: props = {
    onclick: useCallback(() => {
      setCount(count + 1)
    }, [count])
  }

  return (
    <div>
      <p>Count: {count}</p>
      <Child {...childrenProps} />
    </div>
  )
})

export default Parent
