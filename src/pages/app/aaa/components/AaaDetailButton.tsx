import React, { type FC, type ReactNode, useState } from 'react'
import { Button } from 'antd'
import MyModal from '../../../../components/organisms/MyModal'

export type props = {
  item: any
}

const AaaDetailButton: FC<props> = ({ item }) => {
  console.log(item)
  const [visible, setVisible] = useState<boolean>(false)
  const modal = (): ReactNode => {
    if (visible) {
      return <MyModal title="详情欸" open={visible} cancel={() => { setVisible(false) }}></MyModal>
    } else {
      return <></>
    }
  }

  return (<>
    <Button type="link" onClick={() => { setVisible(true) }}>详情</Button>
    { modal() }
  </>)
}

export default AaaDetailButton
