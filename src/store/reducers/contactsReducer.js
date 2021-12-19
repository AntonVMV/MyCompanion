const initialState = {
  contacts: null,
  loading: false,
  error: null,
}

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTBOOK_GET_START':
    case 'CONTACTBOOK_POST_START':
    case 'CONTACTBOOK_PUT_START':
    case 'CONTACTBOOK_DELETE_START':
      return {
        ...state,
        loading: true,
      }

    case 'CONTACTBOOK_GET_FAILURE':
    case 'CONTACTBOOK_POST_FAILURE':
    case 'CONTACTBOOK_PUT_FAILURE':
    case 'CONTACTBOOK_DELETE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case 'CONTACTBOOK_GET_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        contacts: action.payload,
      }
    case 'CONTACTBOOK_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        contacts: [...state.contacts, action.payload],
      }
    case 'CONTACTBOOK_PUT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        contacts: state.contacts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
            }
          } else {
            return item
          }
        }),
      }
    case 'CONTACTBOOK_DELETE_SUCCESS':
      return {
        loading: false,
        error: null,
        contacts: state.contacts.filter((item) => item.id !== action.payload.id),
      }

    default:
      return state
  }
}
