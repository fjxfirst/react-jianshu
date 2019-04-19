import * as actionTypes from './action-types'
import {fromJS} from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})
export const searchFocus = () => ({type: actionTypes.SEARCH_FOCUS})
export const searchBlur = () => ({type: actionTypes.SEARCH_BLUR})

//异步请求
export const getList = () => ((dispatch => {
  axios.get('/api/headerList.json')
    .then(res => {
      dispatch(changeList(res.data.data))
    })
    .catch(err => {
      console.log(err)
    })
}))