import React,{Component} from "react";
import { connect } from 'react-redux';
import { showloginbox , showregistbox ,doregist} from '../action/Action.js';

class Regist extends Component{
	//生命周期：上树之后
	componentDidMount(){
		$("#rigist_form").css({"margin-top" : -1000});
		$("#rigist_form").animate({"margin-top" : -180});
	}

	//点击鼠标的事件
	registBtnHandler(){
		//用户名
		var username = $(this.refs.username).val();
		//密码
		var password1 = $(this.refs.password1).val();
		var password2 = $(this.refs.password2).val();
		//验证密码是否一样
		if(password1 != password2){
			alert("两次输入的密码不同！");
			return;
		}

		 
		//如果相同的话就可以注册了，注册使用Action的函数
		this.props.regist(username,password1,function(data){
			if(data == 1){
				alert("恭喜，你已经成功注册！请自行登录！");
			}else if(data == -1){
				alert("用户名已经被占用");
			}else if(data == -2){
				alert("存储失败！检查一下！");
			}
		});
	}
	 
	render(){
		return (
			<div className="form_box" onClick={()=>{event.stopPropagation();this.props.showregistbox(false)}}>
				<form id="rigist_form" className="form-login"  onClick={(event)=>{event.stopPropagation();}}>
				    <h2 className="form-login-heading" >注册本网站</h2>
				    <div className="login-wrap">
				        <input type="text" className="form-control" placeholder="用户名" autoFocus   ref="username"/>
				        <br />
				        <input type="password" className="form-control" placeholder="密码" ref="password1" />
				        <br />
				        <input type="password" className="form-control" placeholder="重复输入" ref="password2"/>
				        <br />
				        <button className="btn btn-theme btn-block"  type="button" onClick={this.registBtnHandler.bind(this)}><i className="fa fa-lock"></i>注册</button>
			    	</div>
				</form>
			</div>
		);
	};
}

//加工CounterContainer
Regist = connect(
	(state)=>{
		return {
			 
		}
	},{
		showloginbox,
		showregistbox,
		regist : function(username,password,callback){
			return function(dispatch){
				dispatch(doregist(username,password,callback))
			}
		}
	}
)(Regist);

export default Regist;