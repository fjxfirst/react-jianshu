import React, {PureComponent} from 'react'
import {DetailWrapper, Header,Content} from './style'
import {connect} from 'react-redux'
import {actions} from './store'
class Detail extends PureComponent {
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
  render() {
    const {title,content} = this.props
    return (
      <DetailWrapper>
        <Header>
          {title}
        </Header>
        {/*dangerouslySetInnerHTML防止Html标签转义*/}
        <Content dangerouslySetInnerHTML={{__html:content}}/>
      </DetailWrapper>
    )
  }
}

export default connect(
  state=>(
    {
      title:state.getIn(['detail','title']),
      content: state.getIn(['detail','content'])
    }),
  dispatch=>({
    getDetail(id){
      dispatch(actions.getDetail(id))
    }
  })
)(Detail)