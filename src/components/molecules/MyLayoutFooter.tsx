import React, { type FC, memo } from 'react'
import { Layout } from 'antd'

const MyLayoutFooter: FC = memo(() => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Layout.Footer>
  )
})

export default MyLayoutFooter
