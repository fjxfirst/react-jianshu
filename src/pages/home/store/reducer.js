import * as actionTypes from './action-types'
import {fromJS} from 'immutable'

const defaultSate = fromJS({
  topicList: [],
  articleList:[],
  recommendList:[],
  articlePage:1
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
    default:
      return state
  }

}