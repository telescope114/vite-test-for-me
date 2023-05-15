import React, { type FC, memo } from 'react'

const aaa: FC<null> = memo(() => {
  return (
    <>
      <h1>this is aaa</h1>
    </>
  )
})

aaa.displayName = 'aaa'
export default aaa
