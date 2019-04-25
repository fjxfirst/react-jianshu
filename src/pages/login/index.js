import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {LoginWrapper,LoginBox,Input,Button} from './style'
import {connect} from 'react-redux'
import {actions} from './store'
class Login extends PureComponent {
  componentDidMount(){

  }
  render() {
    const {login,loginStatus} = this.props
    if(!loginStatus){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input)=>{this.account=input}}/>
            <Input placeholder='密码' type='password' ref={(input)=>{this.password=input}}/>
            <Button onClick={()=>{login(this.account,this.password)}}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to={'/'}/>
    }
  }
}

export default connect(
  state=>(
    {
      loginStatus:state.getIn(['login','login'])
    }),
  dispatch=>({
    login(accountElem,passwordElem){
      dispatch(actions.login(accountElem.value,passwordElem.value))
    }
  })
)(Login)