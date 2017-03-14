import React from "react";
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Aside from './Aside.js';
import Header from './Header.js';
import Main from './Main.js';
import {getalltype , checklogin , getbrief , fuyuan , shezhidongxi,getAllUser} from '../action/Action.js';


var App = ({children,getalltype,checklogin,getbrief,params,fuyuan , shezhidongxi,getAllUser}) => {
	//进行一些准备
 	getalltype();  //从服务器上拉取所有的分类信息
 	checklogin();  //从服务器上获得登录信息
 	getbrief(params.dongxi);  //从服务器上获得所有标题
 	shezhidongxi(params.dongxi);

 	fuyuan();	//让lock为true，page为0
	//预备的东西，圆括号里面没有东西
	return (
		<div>
			<Header></Header>
			<Aside></Aside>
			{children}
		</div>
	)
}

//加工CounterContainer
App = connect(
	(state)=>{
		return {
			 
		}
	},{
		getalltype,
		checklogin,
		getbrief,
		fuyuan,
		shezhidongxi,
		getAllUser
	}
)(App);

export default App;