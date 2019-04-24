import React, {PureComponent} from 'react'
import {RecommendWrapper, RecommendItem} from '../style'
import {connect} from 'react-redux'
class Recommend extends PureComponent {
  render() {
    const {list} = this.props
    return (
      <RecommendWrapper>
        {
          list.map(item=><RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>)
        }
      </RecommendWrapper>
    )
  }
}

export default connect(
  state=>({
    list:state.getIn(['home','recommendList'])
  })
)(Recommend)