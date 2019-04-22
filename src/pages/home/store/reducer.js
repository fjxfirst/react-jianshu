import * as actionTypes from './action-types'
import {fromJS} from 'immutable'

const defaultSate = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload-images.jianshu.io/upload_images/4872563-1dd99d19914d639a?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload-images.jianshu.io/upload_images/4872563-1dd99d19914d639a?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]
})
export default (state = defaultSate, action) => {
  switch (action.type) {
    default:
      return state
  }

}