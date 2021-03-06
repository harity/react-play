import React from 'react';
import './index.css';

export default class ForgetPwd extends React.Component{
	render(){
		return(
			<div>
				<div class="wrap">
			        <img class="logo" src="/images/logo.png" alt="logo" />
			    </div>
			    <div class="wrap register_cont forget_cont">
			        <div class="title register_title clearfix">
			            <span class="fl register_title_txt">找回密码</span>
			            <span class="fr register_title_a">已有账号，<a class="hover" href="/Home/Login">马上登录</a><span class="middle">|</span><a class="hover" href="/">返回首页</a></span>
			        </div>
			        <div class="table_contstep_one display">
			            <div class="wrap input_margin">
			                <input class="input_register phone" type="text" name="phone" placeholder="手机号" />
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap input_margin">
			                <input class="input_register_short register_phone_code" type="text" name="phone_code" placeholder="短信验证码" />
			                <div class="fr verification">
			                    <span class="get_code">获取验证码</span>
			                </div>
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap register_btn_cont">
			                <span class="next_step">下一步</span>
			            </div>
			        </div>
			        <div class="table_cont step_two display">
			            <div class="wrap input_margin">
			                <span class="input_name">新密码</span>
			                <input class="input_register register_password" type="password" name="password" placeholder="6-20位，字母/数字/符号至少两种" />
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap input_margin">
			                <span class="input_name">确认密码</span>
			                <input class="input_register register_password_check" type="password" name="password" />
			                <span class="input_msg"></span>
			            </div>
			            <div class="wrap register_btn_cont">
			                <span class="next_step">提交修改</span>
			            </div>
			        </div>
			        <div class="table_cont step_three">
			            <p class="change_pwd_step_msg">恭喜您，密码修改成功</p>
			            <div class="wrap register_btn_cont">
			                <a class="next_step" href="/Home/Login">立即登录</a>
			            </div>
			        </div>
			    </div>
			</div>
			)
	}
}