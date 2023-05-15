import { type MenuProps } from 'antd'
import { type ReactNode } from 'react'

export type menuItem = Required<MenuProps>['items'][number]

/**
 * 每个菜单规范格式
 * @param label: {ReactNode}
 * @param key: {string | number}
 * @param icon {ReactNode}
 * @param children {menuItem[]}
 */
export const getItem = (
  label: ReactNode,
  key: string | number,
  icon?: ReactNode,
  children?: menuItem[]
): menuItem => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return {
    key,
    icon,
    children,
    label
  } as menuItem
}

export interface MenuDataItem {
  label: ReactNode
  key: string | number
  icon?: ReactNode
  children?: MenuDataItem[]
}

/**
 * 根据后端配置的mock数据生成菜单配置
 * @param MenuDataItem: {MenuDataItem[]}
 * @return {menuItem[]}
 */
export const getMenuData = (MenuDataItem: MenuDataItem[]): menuItem[] => {
  const out: menuItem[] = []
  for (const item of MenuDataItem) {
    if (item.children != null) {
      const children: menuItem[] = getMenuData(item.children)
      out.push(getItem(item.label, item.key, item.icon, children))
    } else {
      out.push(getItem(item.label, item.key, item.icon))
    }
  }
  return out
}
