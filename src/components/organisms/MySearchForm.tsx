import React, { type FC, useState, memo } from 'react'
import { Button, Form, Row, Space, theme, type FormRule, Col } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { FormItemDom } from '../molecules/MySearchFormItem'

export type mySearchForm = {
  name: string
  label: string
  type: string
  span?: number
  rules?: FormRule[]
  option?: Array<{ value: string, label: string }>
}

export type props = {
  formConfig: mySearchForm[]
}

const MySearchForm: FC<props> = memo<props>((mySearchFormConfig) => {
  const { token } = theme.useToken()
  const [form] = Form.useForm()
  const [expand, setExpand] = useState(false)

  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24
  }

  const onFinish = (values: any): void => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
      <Row gutter={24}>
        {
          mySearchFormConfig.formConfig.map((item, index) => (
            <Col span={(item.span != null) ? item.span : 8} key={index}>
              <Form.Item
                name={item.name}
                label={item.label}
                rules={item.rules}
              >
                <FormItemDom {...item} />
              </Form.Item>
            </Col>
          ))
        }
      </Row>
      <div style={{ textAlign: 'right' }}>
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            onClick={() => {
              form.resetFields()
            }}
          >
            Clear
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand)
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> Collapse
          </a>
        </Space>
      </div>
    </Form>
  )
})

MySearchForm.displayName = 'MySearchForm'
export default MySearchForm
