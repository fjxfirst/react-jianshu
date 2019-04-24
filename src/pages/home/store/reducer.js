import * as actionTypes from './action-types'
import {fromJS} from 'immutable'

const defaultSate = fromJS({
  topicList: [],
  articleList:[],
  recommendList:[],
  articlePage:1,
  isShowTopButton:false
})
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.HOME_CHANGE_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
      })
    case actionTypes.ADD_HOME_LIST:
      return state.merge({
        articleList:state.get('articleList').concat(action.list),
        articlePage:action.nextPage
      })
    case actionTypes.GO_SCROLL_TOP:
      return state.set('isShowTopButton',action.isShow)
    default:
      return state
  }

}