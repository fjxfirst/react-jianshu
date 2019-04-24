import React, {PureComponent} from 'react'
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import {actions} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent {
  render() {
    const {list, getMoreList, page} = this.props
    return (
      <div>
        {
          list.map((item, index) => (
            <Link key={index} to={'/detail'}>
              <ListItem >
                <img className="pic" src={item.get('imgUrl')} alt=''/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => {getMoreList(page)}}>更多文字</LoadMore>
      </div>
    )
  }
}

export default connect((state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
}), dispatch => ({
  getMoreList(page) {
    dispatch(actions.getMoreList(page))
  }
}))(List)