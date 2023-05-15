import React, { ElementType, ReactNode } from 'react'

/**
 * 这个是将数组里面的组件递归嵌套，最后返还一个根组件
 * @param components: { ElementType[] }
 * @return { ReactNode }
 */
export const nestComponents = (components: ElementType[]): ReactNode => {
  if (components.length <= 0) {
    return null
  }
  const [FirstComponent, ...rest] = components
  return (
    <FirstComponent>{ nestComponents(rest) }</FirstComponent>
  )
}
