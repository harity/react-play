import React from 'react';
import ApplyDefault from './default/index';
import ApplyTop from './top/index';
import ApplyRecreation from './recreation/index';
const views = [<ApplyDefault />,<ApplyTop/>,<ApplyRecreation/>];
const text = ['','大神-上分','娱乐-陪玩'];

export default class PersonalApply extends React.Component{	
	constructor(props){
		super(props);
		this.state = {
			apply:0
		}
	}
	changeviews(e){
		var index = text.indexOf(e.target.innerHTML);
		this.setState({
			apply:index
		})
	}
	componentDidUpdate(){
		console.log(this.state.apply)
	}
	
	render(){
		return(
			<div>
				{
					this.state.apply==0?<ApplyDefault father={this.changeviews.bind(this)}/>:views[this.state.apply]
				}
			</div>
			)
	}
}