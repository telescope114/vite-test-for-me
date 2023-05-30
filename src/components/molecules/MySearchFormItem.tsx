import React, { type FC, type ReactNode } from 'react'
import { Col, Form, Input, Select } from 'antd'
import { type props, type mySearchForm } from '../organisms/MySearchForm'

export const FormItemDom = (config: mySearchForm): ReactNode => {
  switch (config.type) {
    case 'selectOne': return (
      <Select>
        { config.option?.map((item, index) => (<Select.Option key={index} value={item.value}>{item.label}</Select.Option>)) }
      </Select>
    )
    default: return (
      <Input placeholder="placeholder" />
    )
  }
}

const MySearchFormItem: FC<props> = ({ formConfig }) => {
  const FormItem = Form.Item
  return formConfig.map((item, index) => (
    <Col span={(item.span != null) ? item.span : 8} key={index}>
      <FormItem
        name={item.name}
        label={item.label}
        rules={item.rules}
        >
        <FormItemDom {...item} />
      </FormItem>
    </Col>
  ))
}

export default MySearchFormItem
