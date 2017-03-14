import React from "react";
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Aside from './Aside.js';
import ContentBox from "../component/ContentBox.js";
import Itembox from "../component/Itembox.js";
import {getbrief,pagejia,shezhilock} from "../action/Action.js";



var Suibiankankan = ({children,getlock,alltypes,allbriefs,gettiezi,showContentBox,getbrief,params,getDongxi,getparams,pagejia,shezhilock}) => {
	 
	//绑定监听
	$(window).scroll(function(){
		if(!getlock()) return;

		var rate = $(this).scrollTop() / ($(document).height() - $(window).height());


		if(rate > 0.7){
			//加载更多的
			pagejia();		//同步语句，不是异步，这里没有Ajax
			shezhilock(false);	//关锁
			getbrief(getDongxi(), function(data){
				//开锁
				data != 0 && shezhilock(true);
			});
		}
	});

	//预备的东西，圆括号里面没有东西
	return (
		<div>
			<div id="main-content">
				<section className="wrapper">
					<h1 className="title">转让交易区</h1>
					<hr />
					<nav className="mynav">
						<h3 className="shaixuan">闲置筛选： </h3>
						<ul>
							{alltypes.map((item,key)=>{
								return <li key={key} ><Link activeClassName="cur"  to={"suibiankankan/" + item.url}>{item.typename}</Link></li> 
							})}

						</ul>
						<Link to={"suibiankankan/"} className="btn btn-default" >清除筛选</Link> 
					</nav>

					{
						allbriefs.map((item,key)=>{
							return <Itembox key={key} item={item}></Itembox>
						})
					}

					{ showContentBox ? <ContentBox></ContentBox> : null }
				</section>
			</div>
		</div>
	)
}

//加工CounterContainer
Suibiankankan = connect(
	(state)=>{
		return {
			"alltypes" : state.indexReducer.alltypes,
			"allbriefs" : state.indexReducer.allbriefs,
			"showContentBox" : state.indexReducer.showContentBox
		}
	},{
		getbrief,
		pagejia,
		shezhilock,
		getlock : function(){
			return function(dispatch,getState){
				return getState().indexReducer.lock;
			}
		},
		getDongxi : function(){
			return function(dispatch,getState){
				return getState().indexReducer.dongxi;
			}
		}
	}
)(Suibiankankan);

export default Suibiankankan;