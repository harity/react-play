import React from 'react';
import PersonalRightWelcome from '../personal-right-welcome/index';
import PersonalApply from '../personal-manito-apply/index';
import OrderReceivRecord from '../personal-order-receiv/index';
import OrderPlaceRecord from '../personal-order-place/index';

const arr = [<PersonalRightWelcome/>,<PersonalApply/>,'',<OrderReceivRecord/>,<OrderPlaceRecord/>];
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