import React, { type FC, type ReactNode } from 'react'
import { Modal, Button } from 'antd'

export type props = {
  // 打开/关闭 true/false
  open: boolean
  // 弹窗标题
  title?: string
  // 取消/关闭事件
  cancel: () => void
  // 确定事件
  ok?: () => void
  // 整体加载
  loading?: boolean
  // 确定按钮加载
  buttonLoading?: boolean
  // 底部按钮替换
  footer?: ReactNode
  // 插槽
  children?: ReactNode
  // 宽度
  width?: string | number
}

const MyModal: FC<props> = (props) => {
  const Footer = (): ReactNode => {
    const ok = (props.ok !== undefined) ? props.ok : props.cancel
    if (props.footer === undefined) {
      return (
        <div className="ant-modal-footer">
          <Button onClick={props.cancel}><span>取 消</span></Button>
          <Button type="primary" onClick={ok}><span>确 定</span></Button>
        </div>
      )
    } else {
      return (<>{ props.footer }</>)
    }
  }
  return <Modal
    title={props.title}
    open={props.open}
    onCancel={props.cancel}
    footer={Footer()}
    width={props.width ? props.width : 520}
  >
    { props.children }
  </Modal>
}

export default MyModal
