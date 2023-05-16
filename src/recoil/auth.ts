import { atom, selector } from 'recoil'

export type authState = {
  token: string | null
}

export const authAtom = atom({
  key: 'authAtom',
  default: (): authState => ({
    token: null
  })
})

export const authSelector = selector({
  key: 'authSelector',
  get: ({ get }) => {
    return get(authAtom)
  },
  set: ({ set }, newValue) => {
    console.log(newValue)
    window.localStorage.setItem('auth', JSON.stringify(newValue))
    set(authAtom, newValue)
  }
})
