import React, { type FC, memo } from 'react'

export type testTwoProps = {
  h1: string | number
  h2: string
  h3: number
}

const TestTwo: FC<testTwoProps> = memo<testTwoProps>(({ h1, h2, h3 }) => {
  return (<>
    <h1>{ h1 }</h1>
    <h1>{ h2 }</h1>
    <h1>{ h3.toString() }</h1>
  </>)
})

export default TestTwo
