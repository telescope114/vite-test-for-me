import React, { type FC, type CSSProperties, useState, useEffect } from 'react'
import { theme, Tag, Button } from 'antd'
import { type ColumnsType } from 'antd/es/table'
import MySearchForm, { type props as mySearchForm } from '../../components/organisms/MySearchForm'
import MyTable, { type dataType } from '../../components/organisms/MyTable'

const aaa: FC = () => {
  const { token } = theme.useToken()

  const listStyle: CSSProperties = {
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16
  }
  const searchConf: mySearchForm = {
    formConfig: [
      { name: 'test1', label: '测试1', type: 'input' },
      { name: 'test2', label: '测试2', type: 'input' },
      { name: 'test3', label: '测试3', type: 'selectOne', option: [{ value: 'a-a', label: 'a1' }, { value: 'a-b', label: 'a2' }] }
    ]
  }
  const [tableData, setTableData] = useState<dataType[]>([])

  useEffect(() => {
    const data: dataType[] = []
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        tags: ['nice', 'developer']
      })
    }
    console.log(data)
    setTableData(data)
  }, [])

  const tableConf: ColumnsType<dataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'action',
      key: 'action',
      render: (_, record) => (<Button type="link">
        详情
      </Button>)
    }
  ]

  return (
    <>
      <MySearchForm {...searchConf} />
      <div style={listStyle}>
        <MyTable config={tableConf} data={tableData} />
      </div>
    </>
  )
}

export default aaa
