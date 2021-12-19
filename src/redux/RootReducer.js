import {combineReducers} from 'redux'
import loginReducer from './reducers/LoginReducer'

export const RootReducer = combineReducers({loginReducer,})