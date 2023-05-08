import React, {type FC, memo, useState} from 'react'
import { Button } from 'antd'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

const Index: FC = memo(() => {
  const [page, setPage] = useState<number>(1)
  const changePage = (): void => {
    if (page === 3) {
      setPage(1)
    } else {
      setPage(page + 1)
    }
  }
  const showPage = () => {
    if (page === 1) return (<PageOne/>)
    else if (page === 2) return (<PageTwo />)
    else if (page === 3) return (<PageThree />)
  }
  return (<>
    <Button type="primary" onClick={changePage}>切换</Button>
    { showPage() }
  </>)
})

export default Index

