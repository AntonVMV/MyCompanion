
const initialState = {
    toDo: null,
    loading: false,
    error: null,
}

export const toDoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TODOLIST_GET_START':
        case 'TODOLIST_POST_START':
        case 'TODOLIST_PUT_START':
        case 'TODOLIST_DELETE_START':
            return {
                ...state,
                loading: true,
            }
        
        case 'TODOLIST_GET_FAILURE':
        case 'TODOLIST_POST_FAILURE':
        case 'TODOLIST_PUT_FAILURE':
        case 'TODOLIST_DELETE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        
        case 'TODOLIST_GET_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                toDo: action.payload,
            }
        case 'TODOLIST_POST_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                toDo: [
                    ...state.toDo,
                    action.payload,
                ]
            }
        case 'TODOLIST_PUT_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                toDo: state.toDo.map(item => {
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            done: action.payload.done,
                        }
                    } else {
                        return item;
                    }
                }),
            }
        case 'TODOLIST_DELETE_SUCCESS':
            return {
                loading: false,
                error: null,
                toDo: state.toDo.filter(item => item.id !== action.payload.id)
            }

        default:
            return state;
    }
}