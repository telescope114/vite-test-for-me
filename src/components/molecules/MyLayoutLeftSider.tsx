import React, {type FC, memo, useState} from 'react'
import { Menu, Layout } from 'antd'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { type menuItem, getMenuData } from '../hooks/myLayoutLeftSiderHooks'

const MyLayoutLeftSider: FC = memo(() => {
  const [collapsed, setCollapsed] = useState(false)
  const menuData: menuItem[] = getMenuData([
    { label: 'Option 1', key: '1', icon: (<PieChartOutlined />) },
    { label: 'Option 2', key: '2', icon: <DesktopOutlined/>},
    { label: 'User', key: 'sub1', icon: (<UserOutlined/>), children: [
      { label: 'Tom', key: '3'},
      { label: 'Bill', key: '4'},
      { label: 'Alex', key: '5'}
    ]},
    { label: 'Team', key: 'sub2', icon: (<TeamOutlined/>), children: [
        { label: 'Team 1', key: '6'},
        { label: 'Team 2', key: '8'}
    ]},
    { label: 'Files', key: '9', icon: (<FileOutlined/>)}
  ])

  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuData} />
    </Layout.Sider>
  )
})

export default MyLayoutLeftSider
