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
      // if (action.payload === "down") {

      // }
      return state
    }
    case 'check': {
      return state.filter(u => u.age >= 18)
    }
    default:
      return state
  }
}
