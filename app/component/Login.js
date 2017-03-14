import React,{Component} from "react";
import { connect } from 'react-redux';
import { showloginbox , dologin} from '../action/Action.js';

class Login extends Component{
	//生命周期：上树之后
	componentDidMount(){
		$("#login_form").css({"margin-top" : -1000});
		$("#login_form").animate({"margin-top" : -180});
	}

	loginBtnHandler(){
		this.props.dologin($(this.refs.username).val() , $(this.refs.password).val() , function(data){
			if(data==-1){
				alert("登录失败,请重新登录");
			}
		});
	}
	 
	render(){
		return (
			<div className="form_box" onClick={()=>{event.stopPropagation();this.props.showloginbox(false)}}>
				<form id="login_form" className="form-login" action="index.html" onClick={(event)=>{event.stopPropagation();}}>
				    <h2 className="form-login-heading" >现在登录</h2>
				    <div className="login-wrap">
				        <input type="text" className="form-control" placeholder="用户名" autoFocus ref="username" />
				        <br />
				        <input type="password" className="form-control" placeholder="密码" ref="password"/>
				        <label className="checkbox">
				            <span className="pull-right">
				                <a data-toggle="modal" href="login.html#myModal">忘记密码</a>
				            </span>
				        </label>
				        <button className="btn btn-theme btn-block" href="index.html" type="button" onClick={this.loginBtnHandler.bind(this)}><i className="fa fa-lock"></i> SIGN IN</button>
				        <hr />

				        <div className="registration">
				            没有账号？<br />
				            <a className="" href="#">
				                Create an account
				            </a>
				        </div>
			    	</div>
				</form>
			</div>
		);
	};
}

//加工CounterContainer
Login = connect(
	(state)=>{
		return {
			 
		}
	},{
		showloginbox,
		dologin
		/*login : function(username,password,callback){
			return   function(dispatch,getState){
				dispatch(dologin(username,password,callback));
			}
		}*/
	}
)(Login);

export default Login;