type counterState = {
  count: number
}

export interface IncrementAction {
  type: 'INCREMENT'
}

export interface DecrementAction {
  type: 'DECREMENT'
}

type CounterAction = IncrementAction | DecrementAction;

const initialState: counterState = {
  count: 0
}

function rootReducer (state = initialState, action: CounterAction): counterState {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 }
    case 'DECREMENT': return { ...state, count: state.count - 1 }
    default: return state
  }
}

// export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
export type RootReducer = typeof rootReducer
