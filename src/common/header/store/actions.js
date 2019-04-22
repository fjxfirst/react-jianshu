import * as actionTypes from './action-types'
import {fromJS} from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length/10)
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
export const mouseEnter = () => ({type: actionTypes.MOUSE_ENTER})
export const mouseLeave = () => ({type: actionTypes.MOUSE_LEAVE})
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})