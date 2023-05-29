import React, { type FC, memo } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const login: FC = memo(() => {
  const navigate = useNavigate()
  const login = (): void => {
    navigate('/app')
  }
  return (<>
    <h1>this is Login</h1>
    <Button type="primary" onClick={login}>Login</Button>
  </>)
})

export default login
