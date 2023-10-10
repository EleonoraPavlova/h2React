import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': { // by name
      let copyState = [...state]
      if (action.payload === "up") {
        return copyState.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (action.payload === "down") {
        return copyState.sort((a, b) => b.name.localeCompare(a.name))
      }
      return state
    }
    case 'check': {
      return state.filter(u => u.age >= action.payload)
    }
    default:
      return state
  }
}
