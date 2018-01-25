import React from 'react';
import PersonalRightWelcome from '../personal-right-welcome/index'

const arr = [<PersonalRightWelcome/>];
export default class PersonalRight extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			index : this.props.cont
		}
	}
	
	render(){
		return(
			<div>
				{arr[this.props.cont]}
			</div>
			)
	}
}