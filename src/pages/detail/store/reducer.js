import * as actionTypes from './action-types'
import {fromJS} from 'immutable'

const defaultSate = fromJS({
  title:'',
  content:''
})
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL: return state.merge({
      title:action.title,
      content:action.content
    })
    default:
      return state
  }

}