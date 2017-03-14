import React,{Component} from "react";
import { connect } from 'react-redux';
import Carousel from './Carousel.js';



class PictureDisplayBox extends Component{
	//组件上树的时候
	componentDidMount(){
		//这里书写jQuery程序！！！
		new Carousel($(this.refs.pdb));
	}

	render(){
		return (
			<div className="pdb" ref="pdb">
				<a href="javascript:;" className="pdb_leftBtn">&lt;</a>
				<a href="javascript:;" className="pdb_rightBtn">&gt;</a>
				<div className="inner">
					<ul>
						{this.props.pics.map((item,key)=>{
							return <li key={key}><img src={item} /></li>
						})}
					</ul>
				</div>
			</div>
		);
	};
}

//加工CounterContainer
PictureDisplayBox = connect(
	(state)=>{
		return {
			 
		}
	},{
		 
	}
)(PictureDisplayBox);

export default PictureDisplayBox;