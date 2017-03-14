import React from "react";
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';


var Main = () => {
	//预备的东西，圆括号里面没有东西
	return (
		<div id="main-content">
			<section className="wrapper">
				我是main
			</section>
		</div>
	)
}

//加工CounterContainer
Main = connect(
	(state)=>{
		return {
			 
		}
	},{}
)(Main);

export default Main;