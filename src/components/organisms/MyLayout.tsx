import React, { type FC, type ReactNode, memo } from 'react'
import { Layout, theme } from 'antd'
import MyLayoutLeftSider from '../molecules/MyLayoutLeftSider'
import MyLayoutHeader from '../molecules/MyLayoutHeader'
import MyLayoutContent from "../molecules/MyLayoutContent";
// import MyLayoutFooter from "../molecules/MyLayoutFooter";

export type myLayoutProps = {
  children: ReactNode
}

const MyLayout: FC<myLayoutProps> = memo<myLayoutProps>(({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MyLayoutLeftSider />
      <Layout className="site-layout">
        <MyLayoutHeader color={colorBgContainer} />
        <MyLayoutContent color={colorBgContainer}>{ children }</MyLayoutContent>
        {/*<MyLayoutFooter />*/}
      </Layout>
    </Layout>
  )
})

export default MyLayout
