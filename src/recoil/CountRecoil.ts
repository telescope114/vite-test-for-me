import {atom, selector} from 'recoil'

export type countStore = Record<string, number>

export const countState = atom<countStore>({
  key: 'countState',
  default: {
    count: 0
  }
})

export const countSelector = selector({
  key: 'countSelector',
  get: ({ get }) => {
    return get(countState)
  },
  set: ({ set }, newValue ): void => {
    set(countState, newValue)
  }
})
