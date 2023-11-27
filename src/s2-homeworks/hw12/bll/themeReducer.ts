import { combineReducers, createStore } from "redux"

export type initialStateType = {
  themeId: number
}


export const initState = {
  themeId: 1
}


export const themeReducer = (state: initialStateType = initState, action: ReturnType<typeof changeThemeId>): initialStateType => {
  switch (action.type) {
    case "SET_THEME_ID":
      return { ...state, themeId: action.id }
    default:
      return state
  }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)


export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  theme: themeReducer
})

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store
