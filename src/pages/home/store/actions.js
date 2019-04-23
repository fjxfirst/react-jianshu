import * as actionTypes from './action-types'
import axios from 'axios'
import {fromJS} from 'immutable'

const changeHomeData = (articleList, recommendList, topicList) => ({
  type: actionTypes.HOME_CHANGE_DATA,
  articleList: articleList,
  recommendList: recommendList,
  topicList: topicList
})
const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})
export const getHomeInof = () => (
  (dispatch) => {
    axios.get('/api/homeData.json')
      .then(res => {
        const {articleList, recommendList, topicList} = res.data
        dispatch(changeHomeData(articleList, recommendList, topicList))
      })
  }
)
export const getMoreList = (page) => (
  (dispatch) => {
    axios.get('/api/homeList.json?page=' + page)
      .then(res => {
        dispatch(addHomeList(res.data.data, page + 1))
      })
  }
)
