import * as actionTypes from './action-types'
import axios from 'axios'
import {fromJS} from 'immutable'
const changeDetail=(title,content)=>({
  type:actionTypes.CHANGE_DETAIL,
  title,
  content
})

export const getDetail=()=>{
  return (dispatch)=>{
    axios.get('/api/detail.json')
      .then(res=>{
        const detail = res.data.data
        dispatch(changeDetail(detail.title,detail.content))
      })
  }
}