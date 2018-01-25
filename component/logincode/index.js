import React from 'react';

export default class LoginCode extends React.Component{
	render(){
		return(
			<div>
				<div class="login_code">
		            <div class="title clearfix">
		                <span class="login_way">扫码登录</span>
		                <div class="login_way_btn_txt">
		                    <img src="/images/code-pc.png" />
		                </div>
		            </div>
		            <div class="code_container">
		                <div class="wrap code_cont">
		                    <img src="/images/code.png" />
		                </div>
		                <p class="app">请打开xxxAPP扫一扫登录</p>
		                <div class="login_txt_a forget"><a class="hover pwd_login" href="">密码登录</a><span class="middle">|</span><a class="hover" href="/Home/Register">注册账号</a></div>
		            </div>
		        </div>
			</div>
			)
	}
}