import React, {PureComponent} from 'react'
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import {connect} from 'react-redux'
import {actions} from './store'
//PureComponent底层已经自己实现的shouldComponentUpdate,
//只有涉及到自己的数据变化的时候才会重新render，所以提高了性能
//使用PureComponent的前提最好是使用了immutable.js
class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeInof()
    this.bindEvent()
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  bindEvent = () => {
    window.addEventListener('scroll', this.props.handleScroll)
  }
  removeEvent = () => {
    window.removeEventListener('scroll', this.props.handleScroll)
  }

  render() {
    const {goTop,isShowTopButton} = this.props
    return <HomeWrapper>
      <HomeLeft>
        <img
          src="//upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          className="banner-img" alt=""/>
        <Topic/>
        <List/>
      </HomeLeft>
      <HomeRight>
        <Recommend/>
        <Writer/>
      </HomeRight>
      <BackTop onClick={goTop} isShowTopButton={isShowTopButton}>回到顶部</BackTop>
    </HomeWrapper>
  }
}

export default connect(
  state => ({
    isShowTopButton: state.getIn(['home','isShowTopButton'])
  }),
  dispatch => ({
    getHomeInof() {
      dispatch(actions.getHomeInof())
    },
    goTop() {
      window.scrollTo(0, 0)
      dispatch(actions.goScrollTop(false))
    },
    handleScroll() {
      if (!window.document.documentElement.scrollTop) {
        dispatch(actions.goScrollTop(false))
      } else {
        dispatch(actions.goScrollTop(true))
      }
    }
  }))(Home)