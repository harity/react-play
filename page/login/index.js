import React from 'react';
import LoginCode from '../../component/logincode/index';
import LoginPwd from '../../component/loginpwd/index';
import './index.css';

export default class Login extends React.Component{
	constructor(){
		super();
		this.state = {
			name:'',
			pwd:'',
			code:''
		}
	}
	render(){
		return(
			<div>
				<div class="wrap">
			        <img class="logo" src="/images/logo.png" alt="logo" />
			    </div>
			    <div class="wrap login_container"> 
			        <div class="login_txt">
			            <div class="title clearfix">
			                <p class="login_way">密码登录</p>
			                <div class="login_way_btn_code">
			                    <img src="/images/code-app.png" />
			                </div>
			            </div>
			            <div class="text_input">
			                <input class="text name" id="name" type="text" name="name" placeholder="用户名/手机号码" />
			            </div>
			            <div class="text_input">
			                <input class="text password" id="password" type="password" name="password" placeholder="密码" />
			            </div>
			            <div class="text_input">
			                <input class="text login_code_input" id="login_code_input" type="text" name="login_code_input" placeholder="验证码" />
			                <div class="login_code_btn_cont fr">
			                    <img src="#" alt="验证码" />
			                </div>
			            </div>
			            <div class="text_input">
			                <span class="login_btn">登录</span>
			            </div>
			            <div class="forget_box clearfix">
			                <div class="fl">
			                    <input type="checkbox" id="agree" />
			                    <span>下次自动登录</span>
			                </div>
			                <div class="fr forget"><a class="hover" href="/Home/ForgetPwd">忘记密码</a><span class="middle">|</span><a class="hover" href="/Home/Register">注册</a></div>
			            </div>
			            <div class="other_way">
			                <span class="fl">第三方登录</span>
			                <span class="other_way_qq"></span>
			                <span class="other_way_wechat"></span>
			            </div>
			        </div>
			        <div class="login_code display">
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
			</div>
			)
	}
}