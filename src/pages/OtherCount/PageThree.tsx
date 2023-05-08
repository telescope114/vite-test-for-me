import React, { type FC, memo } from 'react'
import { useRecoilState } from 'recoil'
import { type countStore, countSelector } from '../../recoil/CountRecoil'

const PageThree: FC = memo(() => {
  const [count] = useRecoilState<countStore>(countSelector)
  return (
    <>
      <h1>查看是否出栈</h1>
      <h3>{ count.count }</h3>
    </>
  )
})

export default PageThree
