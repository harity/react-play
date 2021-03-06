import React from 'react';
import './index.css';

export default class Register extends React.Component{
	render(){
		return(
			<div>
				<div class="wrap">-
			        <img class="logo" src="/images/logo.png" alt="logo" />
			    </div>
			    <div class="wrap register_cont">
			        <div class="title register_title clearfix">
			            <span class="fl register_title_txt">注册会员</span>
			            <span class="fr register_title_a">已有账号，<a class="hover" href="/Home/Login">马上登录</a><span class="middle">|</span><a class="hover" href="/">返回首页</a></span>
			        </div>
			        <div class="table_cont">
			            <div class="wrap input_margin">
			                <span class="input_name">用户名</span>
			                <input class="input_register register_name" type="text" name="name" placeholder="2-14位，字母/数字/中文/下划线" />
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap input_margin">
			                <span class="input_name">登录密码</span>
			                <input class="input_register register_password" type="password" name="password" placeholder="6-20位，字母/数字/符号至少两种" />
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap input_margin">
			                <span class="input_name">确认密码</span>
			                <input class="input_register register_password_check" type="password" name="password" />
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap input_margin">
			                <span class="input_name">验证码</span>
			                <input class="input_register_short register_code" type="text" name="code" />
			                <div class="fr verification">
			                    <img src="#" />
			                </div>
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap input_margin">
			                <span class="input_name">手机号</span>
			                <input class="input_register phone" type="text" name="phone" />
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap input_margin">
			                <span class="input_name">短信验证</span>
			                <input class="input_register_short register_phone_code" type="text" name="phone_code" />
			                <div class="fr verification">
			                    <span class="get_code">获取验证码</span>
			                </div>
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap input_margin">
			                <span class="input_name">联系QQ</span>
			                <input class="input_register qq" type="text" name="qq" />
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap register_w">
			                <input type="checkbox" name="name" class="accept" />
			                <span>我已阅读并接受<a class="hover" href="#">用户协议</a></span>
			            </div>
			            <div class="wrap register_btn_cont">
			                <span class="register_btn">注册</span>
			            </div>
			        </div>
			        <div class="register_other_cont">
			            <span class="fl">使用社交软件注册</span>
			            <span class="register_qq"></span>
			            <span class="register_wechat"></span>
			        </div> 
			    </div>
			</div>
			)
	}
}