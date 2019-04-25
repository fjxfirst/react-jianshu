import * as actionTypes from './action-types'
import axios from 'axios'
const changeDetail=(title,content)=>({
  type:actionTypes.CHANGE_DETAIL,
  title,
  content
})

export const getDetail=(id)=>{
  return (dispatch)=>{
    axios.get('/api/detail.json?id='+id)
      .then(res=>{
        const detail = res.data.data
        dispatch(changeDetail(detail.title,detail.content))
      })
  }
}