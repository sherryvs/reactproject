import React,{Component} from "react";
import { connect } from 'react-redux';
import {gettiezi} from "../action/Action.js";
import PictureDisplayBox from "../component/PictureDisplayBox.js";

class ItemBox extends Component{
	 
	render(){
		return (
			<div  className="itembox">
				<h3 onClick={()=>{this.props.gettiezi(this.props.item.id)}} className="item_title" >{this.props.item.title}</h3>
				<hr />
				<p className="briefBox">
					{this.props.item.brief}
				</p>

				{this.props.item.pics.length != 0 ? <PictureDisplayBox pics={this.props.item.pics}></PictureDisplayBox> : null}
			</div>
		);
	};
}

//加工CounterContainer
ItemBox = connect(
	(state)=>{
		return {
			 
		}
	},{
		gettiezi
	}
)(ItemBox);

export default ItemBox;