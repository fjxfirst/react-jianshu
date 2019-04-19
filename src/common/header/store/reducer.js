import * as actionTypes from './action-types'
import {fromJS} from 'immutable'
const defaultSate = fromJS({
  focused: false,
  list:[],
  page:1,
  totalPage:1
})
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused',true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused',false)
    case actionTypes.CHANGE_LIST:
      return state.set('list',action.data)
    default:return state
  }

}