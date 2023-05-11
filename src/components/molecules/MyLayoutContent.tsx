import React, { type FC, memo } from 'react'
import { Breadcrumb, Layout } from 'antd'

export type myLayoutContent = {
  color: string
}

const MyLayoutContent: FC<myLayoutContent> = memo<myLayoutContent>(({ color }) => {
  return (
    <Layout.Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, height: '100%', background: color }}>
        Bill is a cat.
      </div>
    </Layout.Content>
  )
})

export default MyLayoutContent
