import React, { type Key, type FC, useState, useMemo } from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

export type dataType = {
  key: Key
  name: string
  age: number
  address: string
  tags: string[]
}

export type props = {
  config: ColumnsType<dataType>
  data: dataType[]
}

const MyTable: FC<props> = ({ config, data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const onSelectChange = (newSelectedRowKeys: React.Key[]): void => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  return useMemo(() => (
    <>
      <Table
        rowSelection={rowSelection}
        columns={config}
        dataSource={data}
        scroll={{ y: 500 }}
      />
    </>
  ),
  [config, data, rowSelection]
  )
}

export default MyTable
