import React, { type FC, memo } from 'react'

const test: FC<null> = memo(() => {
  return (
    <h1>这个是test文件</h1>
  )
})

test.displayName = 'test'
export default test
