import React, { type ReactNode } from 'react'
import { type FormRule, Input, Select } from 'antd'

export type mySearchForm = {
  name: string
  label: string
  type: string
  span?: number
  rules?: FormRule[]
  option?: Array<{ value: string, label: string }>
}

export const SearchFormItem = ({ type, option }: mySearchForm): JSX.Element => {
  switch (type) {
    case 'selectOne': return (
      <Select>
        { option?.map((item, index) => (<Select.Option key={index} value={item.value}>{item.label}</Select.Option>)) }
      </Select>
    )
    default: return (
      <Input placeholder="placeholder" />
    )
  }
}

const MySearchFormItem = ({ type, option }: mySearchForm): ReactNode => {
  switch (type) {
    case 'selectOne': return (
      <Select>
        { option?.map((item, index) => (<Select.Option key={index} value={item.value}>{item.label}</Select.Option>)) }
      </Select>
    )
    default: return (
      <Input placeholder="placeholder" />
    )
  }
}

export default MySearchFormItem