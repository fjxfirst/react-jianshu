import * as actionTypes from './action-types'
import {fromJS} from 'immutable'

const defaultSate = fromJS({
  login:false
})
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_STATUS: return state.set('login',action.status)
    default:
      return state
  }

}