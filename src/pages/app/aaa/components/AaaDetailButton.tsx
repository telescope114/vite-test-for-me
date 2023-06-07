import React, { type FC, type ReactNode, useCallback, useState } from 'react'
import { Button, Badge } from 'antd'
import MyModal from '../../../../components/organisms/MyModal'
import MyDescription, { type config as descriptionConfig } from '../../../../components/organisms/MyDescription'

export type props = {
  item: any
}

const AaaDetailButton: FC<props> = ({ item }) => {
  const [visible, setVisible] = useState<boolean>(false)

  const config: descriptionConfig[] = [
    { label: 'Product', value: 'product', span: 1 },
    { label: 'Billing Mode', value: 'billingMode', span: 1 },
    { label: 'Automatic Renewal', value: 'automaticRenewal', span: 1 },
    { label: 'Order time', value: 'orderTime', span: 1 },
    { label: 'Usage Time', value: 'usageTime', span: 2 },
    { label: 'Status', value: 'status', span: 3, children: (text) => (<Badge status="processing" text={text as string} />) },
    { label: 'Negotiated Amount', value: 'negotiatedAmount', span: 1 },
    { label: 'Discount', value: 'discount', span: 1 },
    { label: 'Official Receipts', value: 'officialReceipts', span: 1 },
    { label: 'Config Info', value: 'configInfo', span: 1, children: (text) => (<>{ text as ReactNode }</>) }
  ]
  const data = {
    product: 'Cloud Database',
    billingMode: 'Prepaid',
    automaticRenewal: 'YES',
    orderTime: '2018-04-24 18:00:00',
    usageTime: '2019-04-24 18:00:00',
    status: 'Running',
    negotiatedAmount: '$80.00',
    discount: '$20.00',
    officialReceipts: '$60.00',
    configInfo: `
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />`
  }

  const modal = (): ReactNode => {
    const cancel = useCallback(() => {
      setVisible(false)
    }, [visible])

    const ok = useCallback(() => {
      setVisible(false)
    }, [visible])

    if (visible) {
      return <MyModal title="详情欸" open={visible} cancel={cancel} ok={ok} width={1080}>
        <MyDescription config={config} data={data} column={3} width={'1080px'}/>
      </MyModal>
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
