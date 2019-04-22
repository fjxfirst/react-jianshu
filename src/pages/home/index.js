import React,{Component} from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
export default class Home extends Component{
  render(){
    return <HomeWrapper>
              <HomeLeft>
                <img src="//upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="banner-img"/>
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