type countState = {
  count: number
}

export type countAction = {
  type: string
  payload?: number | any
  [keys: string]: any
}

const initialState: countState = {
  count: 0
}

export const rootReducers = (state: countState = initialState, { type }: countAction): countState => {
  switch (type) {
    case 'increment': return { ...state, count: state.count + 1 }
    case 'decrement': return { ...state, count: state.count + 1 }
    default: return state
  }
}

export default rootReducers
