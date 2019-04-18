import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import {connect} from 'react-redux'
import {actions} from './store'



class Header extends Component {
  render() {
    const {focused,handleInputFocus,handleInputBlur} = this.props
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
    handleInputFocus(){
      dispatch(actions.searchFocus())
    },
    handleInputBlur(){
      dispatch(actions.searchBlur())
    }
  }
}
export default connect(
  (state) => ({
    focused: state.header.focused
  }),
  mapDispatchToProps
)(Header)