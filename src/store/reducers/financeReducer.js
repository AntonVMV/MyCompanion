const initialState = {
  finance: null,
  loading: false,
  error: null,
}

export const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FINANCE_GET_START':
      return {
        ...state,
        loading: true,
      }

    case 'FINANCE_GET_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case 'FINANCE_GET_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        finance: action.payload,
      }
    default:
      return state
  }
}
