import React, { type FC, memo } from 'react'
import { Layout, theme } from 'antd'
import MyLayoutLeftSider from '../molecules/MyLayoutLeftSider'
import MyLayoutHeader from '../molecules/MyLayoutHeader'
import MyLayoutContent from "../molecules/MyLayoutContent";
import MyLayoutFooter from "../molecules/MyLayoutFooter";

const MyLayout: FC = memo(() => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MyLayoutLeftSider />
      <Layout className="site-layout">
        <MyLayoutHeader color={colorBgContainer} />
        <MyLayoutContent color={colorBgContainer} />
        <MyLayoutFooter />
      </Layout>
    </Layout>
  )
})

export default MyLayout
