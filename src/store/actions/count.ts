export type countAction = {
  type: string
  payload?: number
}

export const increment = (): countAction => {
  return { type: 'increment' }
}

export const decrement = (): countAction => {
  return { type: 'decrement' }
}

export const setCount = (count: number): countAction => {
  return { type: 'setCount', payload: count }
}
