// import {combineReducers} from 'redux'
import {headerReducer} from '../common/header/store'
import {combineReducers} from 'redux-immutable'
export default combineReducers({
  header:headerReducer
})