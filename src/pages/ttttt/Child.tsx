import React, { type FC, memo } from 'react'
import { Button } from 'antd'

export type props = {
  onclick: () => void
}

const Child: FC<props> = memo<props>(({ onclick }) => {
  console.log('This is Child component.')
  return <Button onClick={onclick}>Click me</Button>
})

export default Child
