import * as actionTypes from './action-types'
import {fromJS} from 'immutable'
const defaultSate = fromJS({
  focused: false,
  list:[],
  mouseIn: false,
  page:0,
  totalPage:0
})
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused',true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused',false)
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      })
    case actionTypes.MOUSE_ENTER: return state.set('mouseIn',true)
    case actionTypes.MOUSE_LEAVE: return state.set('mouseIn',false)
    case actionTypes.CHANGE_PAGE: return state.set('page',action.page)
    default:return state
  }

}