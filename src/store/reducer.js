// import {combineReducers} from 'redux'
import {headerReducer} from '../common/header/store'
import {homeReducer} from '../pages/home/store'
import {combineReducers} from 'redux-immutable'
export default combineReducers({
  header:headerReducer,
  home:homeReducer
})