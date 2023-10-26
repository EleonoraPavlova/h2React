type LoadingActionType = ReturnType<typeof loadingAC>


const initState = {
  isLoading: false,
}

type initStateType = {
  isLoading: boolean,
}

export const loadingReducer = (state: initStateType = initState, action: LoadingActionType): initStateType => {
  switch (action.type) {
    case 'CHANGE_LOADING': {
      return { ...state, isLoading: action.isLoading }
    }
    default:
      return state
  }
}

export const loadingAC = (isLoading: boolean) => {
  return {
    type: 'CHANGE_LOADING',
    isLoading,
  } as const
}
