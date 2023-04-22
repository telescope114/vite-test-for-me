import { countAction } from '../reducers'

export const increment = (): countAction => {
  return { type: 'INCREMENT' }
}

export const decrement = (): countAction => {
  return { type: 'DECREMENT' }
}

export const setCount = (data: number): countAction => {
  return { type: 'SET_COUNT', payload: data }
}
