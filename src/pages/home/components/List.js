import React, {PureComponent} from 'react'
import {ListItem, ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux'
import {actions} from '../store'
class List extends PureComponent {
  render() {
    const {list,getMoreList,page} = this.props
    return (
      <div>
        {
          list.map((item,index) => (
            <ListItem key={index}>
              <img className="pic" src={item.get('imgUrl')} alt=''/>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={()=>{getMoreList(page)}}>更多文字</LoadMore>
      </div>
    )
  }
}

export default connect((state) => ({
  list: state.getIn(['home', 'articleList']),
  page:state.getIn(['home','articlePage'])
}), dispatch=>({
  getMoreList(page){
    dispatch(actions.getMoreList(page))
  }
}))(List)