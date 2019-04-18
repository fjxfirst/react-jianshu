import * as actionTypes from './action-types'
const defaultSate = {
  focused: false
}
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return {
        focused: true
      }
    case actionTypes.SEARCH_BLUR:
      return {
        focused: false
      }
    default:return state
  }

}