import { createStore } from 'redux'
import countReducer from './reducers/count'

const store = createStore(countReducer)

export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe

export default store
