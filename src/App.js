import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header/>
              {/*exact表示路径必须完全一致*/}
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
