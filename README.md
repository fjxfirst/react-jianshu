This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
## 所用到的技术
### `create-react-app`
react脚手架
### `react-redux`
项目状态管理
###`axios`
ajax请求
###`styled-components`
创建样式组件，避免css样式由于类名相同产生的冲突  
```
export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
`
```
###`immutable`
####使用immutable管理状态数据  
1.fromJS(js对象)，将js对象转换为immutable类型  
2.immutable对象.toJS(),将immutable对象转换为js对象  
3.state.set('数据名',新值)  
4.state.merge({}),一次性赋值  
5.state.getIn(['reducer名','数据名']),state.get('数据名')获取state中的数据  
6.在组件中使用时，应该用get()
###`PureComponent`
PureComponent底层已经自己实现的shouldComponentUpdate,只有涉及到自己的数据变化的时候才会重新render，所以提高了性能使用PureComponent的前提最好是使用了immutable.js  
###`react-dom-router`
路由的控制与管理  
```
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
```  
使用withRouter,可以获取到route中的数据和参数  
```
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
)(withRouter(Detail))
```
###`react-loadable`
实现组件的异步加载，提高性能
```
import React from 'react'
import Loadable from 'react-loadable'
const LoadableComponent = Loadable({
  loader:()=>import('./'),
  loading(){
    return <div>正在加载</div>
  }
})
export default ()=><LoadableComponent/>
```