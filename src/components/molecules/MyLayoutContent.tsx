import React, { type FC, type ReactNode, memo } from 'react'
import { Breadcrumb, Layout } from 'antd'

export interface myLayoutContent {
  color: string
  children: ReactNode
}

const MyLayoutContent: FC<myLayoutContent> = memo<myLayoutContent>(({ color, children }) => {
  return (
    <Layout.Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, height: 'calc(100% - 54px)', background: color }}>
        {children}
      </div>
    </Layout.Content>
  )
})

export default MyLayoutContent
