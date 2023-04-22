import { countAction } from '../actions/count'

export type countState = {
  count: number
  [key: string]: number
}

const count: countState = {
  count: 0
}

const countReducer = (state: countState = count, action: countAction): countState => {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 }
    case 'decrement': return { ...state, count: state.count - 1 }
    default: return state
  }
}

export default countReducer
