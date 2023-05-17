import React, { type FC } from 'react'
import { Button } from 'antd'

const login: FC<{ authCallback: ({ token }: Record<string, string>) => void }> = ({ authCallback }) => {
  const login = (): void => {
    authCallback({ token: '123465' })
  }
  return (<>
    <h1>this is Login</h1>
    <Button type="primary" onClick={login}>Login</Button>
  </>)
}

export default login
