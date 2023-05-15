import React, { type FC, memo } from 'react'
import { Layout } from 'antd'

export interface myLayoutHeader {
  color: string
}

const MyLayoutHeader: FC<myLayoutHeader> = memo<myLayoutHeader>(({ color }) => {
  return (
    <Layout.Header style={{ padding: 0, background: color }} />
  )
})

export default MyLayoutHeader
