import React from 'react';
import './index.css';

export default class ApplyDefault extends React.Component{
	
	constructor(props){
		super(props);
		
	}
	
	render(){
		return(
			<div class="manito_apply">
		        <p class="personal_title">大神申请</p>
		        <p class="manito_apply_title">选择大神类型</p>
		        <div class="manito_apply_type">
		            <div class="manito_apply_type_upper fl">
		                <a class="authentication_btn active">
		                    <span onClick={this.props.father}>大神-上分</span>
		                </a>
		                <div class="authentication_cont">
		                    <span>初审资料提交</span>
		                    <span class="small_txt">2018-02-18 16:00</span>
		                    <p><span></span></p>
		                    <span>初审通过</span>
		                    <span>2018-02-18 16:00</span>
		                </div>
		            </div>
		            <div class="manito_apply_type_recreation fl">
		                <a class="authentication_btn" >
		                    <span onClick={this.props.father}>娱乐-陪玩</span>
		                </a>
		                <div class="authentication_cont">
		                    <span>未认证</span>
		                </div>
		            </div>
		        </div>
		    </div>
			)
	}
}