import { combineReducers } from 'redux'
import { noteReducer } from './reducers/noteReducer'
import { toDoReducer } from './reducers/toDoreducer'
import { contactsReducer } from './reducers/contactsReducer'
import { weatherReducer } from './reducers/weatherReducer'
import { financeReducer } from './reducers/financeReducer'

export const reducer = combineReducers({
  noteReducer,
  toDoReducer,
  contactsReducer,
  weatherReducer,
  financeReducer,
})
