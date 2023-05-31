import React, { type FC, type CSSProperties } from 'react'
import { theme } from 'antd'
import MySearchForm, { type props as mySearchForm } from '../../components/organisms/MySearchForm'

const aaa: FC = () => {
  const { token } = theme.useToken()

  const listStyle: CSSProperties = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16
  }
  const formConfig: mySearchForm = [
    { name: 'test1', label: '测试1', type: 'input' },
    { name: 'test2', label: '测试2', type: 'input' },
    { name: 'test3', label: '测试3', type: 'selectOne', option: [{ value: 'a-a', label: 'a1' }, { value: 'a-b', label: 'a2' }] }
  ]

  return (
    <>
      <MySearchForm formConfig={formConfig} />
      <div style={listStyle}>Search Result List</div>
    </>
  )
}

export default aaa
