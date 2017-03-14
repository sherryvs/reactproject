import React from "react";
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';


var Aside = () => {
	//预备的东西，圆括号里面没有东西
	return (
		<div>
			 <aside>
		          <div id="sidebar"  className="nav-collapse ">
		              <ul className="sidebar-menu" id="nav-accordion">
		                  <li className="mt">
		                     <Link to="suibiankankan" activeClassName="active">
		                          <i className="fa fa-sort-amount-desc"></i>
		                          <span>转让交易区</span>
		                      </Link>
		                  </li>
		                  <li className="sub-menu">
		                      <Link to="fabu" activeClassName="active">
		                          <i className="fa fa-paper-plane-o"></i>
		                          <span>发布闲置</span>
		                      </Link>
		                  </li>
		                  <li className="sub-menu">
		                     <Link to="yonghu" activeClassName="active">
		                          <i className="fa fa-user" ></i>
		                          <span>全部用户</span>
		                      </Link>
		                  </li>
		                  
		              </ul>
		          </div>
		      </aside>
		</div>
	)
}

//加工CounterContainer
Aside = connect(
	(state)=>{
		return {
			 
		}
	},{}
)(Aside);

export default Aside;