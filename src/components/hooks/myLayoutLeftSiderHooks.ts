import { MenuProps } from 'antd'
import { type ReactNode } from 'react'

export type MenuItem = Required<MenuProps>['items'][number]

/**
 * 每个菜单规范格式
 * @param label: {ReactNode}
 * @param key: {string | number}
 * @param icon {ReactNode}
 * @param children {MenuItem[]}
 */
export const getItem = (
  label: ReactNode,
  key: string | number,
  icon?: ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}
