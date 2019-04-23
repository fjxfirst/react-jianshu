import React, {Component} from 'react'
import {HomeWrapper, HomeLeft, HomeRight} from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import {connect} from 'react-redux'
import {actions} from './store'
class Home extends Component {
  componentDidMount() {
    this.props.getHomeInof()
  }

  render() {
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
    </HomeWrapper>
  }
}
export default connect(null,dispatch=>({
  getHomeInof(){
    dispatch(actions.getHomeInof())
  }
}))(Home)