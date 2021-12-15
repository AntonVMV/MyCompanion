
const initialState = {
    notes: null,
    loading: false,
    error: null,
}

export const noteReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NOTES_GET_START':
        case 'NOTES_POST_START':
        case 'NOTES_PUT_START':
        case 'NOTES_DELETE_START':
            return {
                ...state,
                loading: true,
            }
        
        case 'NOTES_GET_FAILURE':
        case 'NOTES_POST_FAILURE':
        case 'NOTES_PUT_FAILURE':
        case 'NOTES_DELETE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        
        case 'NOTES_GET_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                notes: action.payload,
            }
        case 'NOTES_POST_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                notes: [
                    ...state.notes,
                    action.payload,
                ]
            }
        case 'NOTES_PUT_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                notes: state.notes.map(item => {
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            text: action.payload.text,
                        }
                    } else {
                        return item;
                    }
                }),
            }
        case 'NOTES_DELETE_SUCCESS':
            return {
                loading: false,
                error: null,
                notes: state.notes.filter(item => item.id !== action.payload.id)
            }

        default:
            return state;
    }
}