import React ,{Component} from "react";
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import {getAllUser} from '../action/Action';


class Yonghu  extends Component {

	componentWillMount(){
		console.log("xxxxx");
			this.props.getAllUser();//获取所有用户
	}
	//预备的东西，圆括号里面没有东西
	render(){
		return (
			<div id="main-content">
				<section className="wrapper">
					<div className="col-md-12 mt">
		                  	<div className="content-panel">
		                          <h4><i className="fa fa-angle-right"></i> 用户列表</h4><hr /><table className="table table-hover">
		                              <thead>
		                              <tr>
		                                  <th>id</th>
		                                  <th>用户名</th>
		                                  <th>Last Name</th>
		                                  <th>Username</th>
		                              </tr>
		                              </thead>
		                              <tbody>
		                         {
		                         	this.props.AllUser.map((item,key)=>{
		                         		return (
		                         			<tr key={key}>
			                                  <td>{item.id}</td>
			                                  <td>{item.username}</td>
			                                  <td>Otto</td>
			                                  <td>@mdo</td>
		                              		</tr>	

		                         			)
		                         	})
		                         }
		                              
		                              </tbody>
		                          </table>
		                  	  </div>
		                  </div>
				</section>
			</div>
		)
	}
}

//加工CounterContainer
Yonghu = connect(
	(state)=>{
		return {
			"AllUser":state.indexReducer.allUser
		}
	},{getAllUser}
)(Yonghu);

export default Yonghu;