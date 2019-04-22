import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'
import {connect} from 'react-redux'
import {actions} from './store'


class Header extends Component {

  getListArea = () => {
    const {page, totalPage, focused, list, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
    let newList = list.toJS()
    let itemLIst = []
    if (newList.length) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (newList[i]) {
          itemLIst.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage)}}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {itemLIst}
          </SearchInfoList>
        </SearchInfo>)
    } else {
      return null
    }
  }

  render() {
    const {focused, handleInputFocus, handleInputBlur} = this.props
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch className={focused ? 'focused' : ''}
                         onFocus={handleInputFocus}
                         onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'><i className="iconfont">&#xe615;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actions.getList())
      dispatch(actions.searchFocus())
    },
    handleInputBlur() {
      dispatch(actions.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actions.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actions.mouseLeave())
    },
    handleChangePage(page, totalPage) {
      if (page + 1 < totalPage) {
        dispatch(actions.changePage(page + 1))
      } else {
        dispatch(actions.changePage(0))
      }
    }
  }
}
export default connect(
  (state) => ({
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }),
  mapDispatchToProps
)(Header)