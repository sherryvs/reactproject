import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware , combineReducers} from 'redux';
import { Provider } from 'react-redux';
import indexReducer from './reducer/indexReducer.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './Container/App.js';
import Suibiankankan from './Container/Suibiankankan.js';
import Fabu from './Container/Fabu.js';
import Yonghu from './Container/Yonghu.js';
import { Router, Route, hashHistory,IndexRoute  } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { getalltype } from './action/Action.js';

//日志中间件
var logger = createLogger();

//处理加工一下reducer
var reducer = combineReducers({
	indexReducer,
	routing: routerReducer
});
 
//创建了一个store对象，使用counter来创建
var store = createStore(reducer,applyMiddleware(thunk,logger));


//创建一个History对象
const history = syncHistoryWithStore(hashHistory, store);

//此时就可以上组件了
ReactDOM.render(
	<Provider store={store}>
	    <Router history={history}>
			<Route path="/" component={App}>
			 <IndexRoute component={Suibiankankan}/>
				<Route path="/suibiankankan" component={Suibiankankan}>
					<Route path="/suibiankankan/:dongxi" ></Route>
				</Route>
				<Route path="/fabu" component={Fabu}></Route>
				<Route path="/yonghu" component={Yonghu}></Route>
			</Route>
	    </Router>
  	</Provider>
	,
	document.getElementById("container")
)