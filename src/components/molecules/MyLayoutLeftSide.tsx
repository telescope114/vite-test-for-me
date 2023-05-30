import React, { type FC, memo, useState } from 'react'
import { Menu, Layout } from 'antd'
import { PieChartOutlined, TeamOutlined } from '@ant-design/icons'
import { type menuItem, getMenuData } from '../hooks/myLayoutLeftSiderHooks'
import { useNavigate } from 'react-router-dom'

const MyLayoutLeftSide: FC = memo(() => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const menuData: menuItem[] = getMenuData([
    { label: 'Option 1', key: '/app/test', icon: (<PieChartOutlined />) },
    {
      label: 'Layout',
      key: '/app',
      icon: (<TeamOutlined/>),
      children: [
        { label: 'aaa', key: '/app/aaa' },
        { label: 'a2', key: '/app/a2' }
      ]
    }
  ])

  const getMenuItem = ({ item, key, keyPath, domEvent }: any): void => {
    navigate(key, { state: { path: key } })
  }

  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => { setCollapsed(value) }}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuData} onClick={getMenuItem} />
    </Layout.Sider>
  )
})

export default MyLayoutLeftSide
