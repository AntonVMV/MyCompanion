import { combineReducers } from "redux";
import { noteReducer } from "./reducers/noteReducer";
import { toDoReducer } from "./reducers/toDoreducer";
import { contactsReducer } from "./reducers/contactsReducer";


export const reducer = combineReducers({
    noteReducer,
    toDoReducer,
    contactsReducer,
})