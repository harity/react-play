import React from 'react';
import Nav from '../../component/nav/index';
import PersonalNav from '../../component/personalnav/index';

export default class Personal extends React.Component{
	render(){
		return(
			<div>
				<Nav />
				<PersonalNav />
			</div>
			)
	}
}