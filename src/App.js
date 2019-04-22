import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
            <div>
              {/*exact表示路径必须完全一致*/}
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
