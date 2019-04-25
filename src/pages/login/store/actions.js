import * as actionTypes from './action-types'
import axios from 'axios'

export const changeLoginStatus = (status)=>({
  type: actionTypes.CHANGE_LOGIN_STATUS,
  status
})
export const login=(accout,password)=>{
  return (dispatch)=>{
    axios.get('/api/login.json?accout='+accout+'&password='+password)
      .then(res=>{
        const result = res.data.data
        if(result){
          dispatch(changeLoginStatus(true))

        }else{
          alert('登录失败')
        }
      })
  }
}