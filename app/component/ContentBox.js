import React,{Component} from "react";
import { connect } from 'react-redux';
import {gettiezi,guanbicontent} from '../action/Action.js';

class ContentBox extends Component{
	//生命周期：上树之后
	componentDidMount(){
	 
	}

	render(){
		var url = "/php/gettiezi.php?id=" + this.props.cid;
		return (
			<div>
				<div className="mask" onClick={this.props.guanbicontent}></div>
				<div className="contentbox">
					<iframe src={url} ></iframe>
				</div>
			</div>
		);
	};
}

//加工CounterContainer
ContentBox = connect(
	(state)=>{
		return {
			cid : state.indexReducer.cid
		}
	},{
		gettz : function(id,cb){
			return function(dispatch){
				dispatch(gettiezi(id,cb));
			}
		},
		guanbicontent
	}
)(ContentBox);

export default ContentBox;