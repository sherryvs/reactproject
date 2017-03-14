import React from "react";
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Login from '../component/Login.js';
import Regist from '../component/Regist.js';
import {showloginbox,showregistbox} from '../action/Action.js';
 
var Header = ({showLogin,showRegist,showloginbox,showregistbox,login,username}) => {

	//预备的东西，圆括号里面没有东西
	return (
		<div>
			<header className="header black-bg">
			 
			<div className="logoPic">
				<a href="/" className="logo"><img src="../../assets/images/er_logo.png"  alt="二手转让" /> </a>
			</div>
			<div className="form_search">

			<i className="fa fa-search search_button"></i>
				<input type="text"  value="请输入" className="text_search" />
			</div>
				<div className="top-menu">
					{
						(()=>{
							if(!login){
								return <ul className="nav pull-right top-menu">
					    					<li><a className="btn_login" href="javascript:;" onClick={()=>{showloginbox(true)}}>登录</a></li>
					    					<li><a className="btn_regist" href="javascript:;" onClick={()=>{showregistbox(true)}}>注册</a></li>
									</ul>
							}else{
								return <ul className="">
										<li  className="login_username" >欢迎你，{username}用户！已经成功登录</li>
	 								</ul>
							}
						})()
					}
				</div>
	        </header>

	        {showLogin ? <Login></Login> : null}
	        {showRegist ? <Regist></Regist> : null}
		</div>
	)
}

//加工CounterContainer
Header = connect(
	(state)=>{
		return {
			showLogin : state.indexReducer.showLogin,
			showRegist : state.indexReducer.showRegist,
			login : state.indexReducer.login,
			username : state.indexReducer.username
		}
	},{
		showloginbox,
		showregistbox
	}
)(Header);

export default Header;