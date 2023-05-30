import React, { type FC, type ReactNode, memo } from 'react'
import { Layout, theme } from 'antd'
import MyLayoutLeftSide from '../molecules/MyLayoutLeftSide'
import MyLayoutHeader from '../molecules/MyLayoutHeader'
import MyLayoutContent from '../molecules/MyLayoutContent'

export interface myLayoutProps {
  children?: ReactNode
}

const MyLayout: FC<myLayoutProps> = memo<myLayoutProps>(({ children }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MyLayoutLeftSide />
      <Layout className="site-layout">
        <MyLayoutHeader color={colorBgContainer} />
        <MyLayoutContent color={colorBgContainer}>{ children }</MyLayoutContent>
      </Layout>
    </Layout>
  )
})

export default MyLayout
