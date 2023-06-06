import React, { type FC, type ReactNode } from 'react'
import { Descriptions } from 'antd'

export type config = { label: string, value: string, span: number, type?: string, children?: (text: unknown, record: object) => ReactNode }

export type props = {
  // 标题
  title?: string
  // 每行展示数据数
  column?: number
  // 配置信息
  config: config[]
  // 展示数据
  data: any
}

const MyDescription: FC<props> = ({ title, column = 3, config, data }) => {
  return (
    <Descriptions title="User Info" bordered>
      { config.map(({ label, span = 1, value, children }, index) => {
        return (
          <Descriptions.Item label={label} key={index} span={span}>{ children ? children(data[value], data) : data[value] }</Descriptions.Item>
        )
      }) }
    </Descriptions>
  )
}

export default MyDescription
