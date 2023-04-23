import { FC, memo } from 'react'

const NotUpdateTest: FC = memo(() => {
  console.log('NotUpdateTest was running, just now')
  return (
    <>for test</>
  )
})

export default NotUpdateTest
