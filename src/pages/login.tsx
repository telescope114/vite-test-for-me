import React, { type FC, memo } from 'react'
import { Button } from 'antd'
// import { useHref } from 'react-router'

const login: FC = memo(({ authCallback }: any) => {
  const login = (): void => {
    // const [, set] = useRecoilState(authSelector)
    authCallback({ token: '123465' })
  }
  return (<>
    <h1>this is Login</h1>
    <Button type="primary" onClick={login}>Login</Button>
  </>)
})

export default login
