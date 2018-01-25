import React from 'react';
import './index.css';

export default class Nav extends React.Component{
	render(){
		return(
			<header class="nav_container">
			    <div class="wrap nav_cont">
			        <div class="nav_logo_cont fl">
			            <a href="/">
			                <img src="../images/logo.png" alt="首页" />
			            </a>
			        </div>
			        <div class="nav_list_cont fl">
			            <nav>
			                <a href="/">首页</a>
			                <a href="/">陪玩</a>
			                <a href="/Personal/Index">个人中心</a>
			                <a href="/">活动公告</a>
			                <a href="/">帮助中心</a>
			            </nav>
			        </div>
			        <div class="useinfo">
			            <div class="use_cont display" value ="0">
			                <a class="nav_btn" href="/Home/Login">登录</a><a class="nav_btn" href="/Home/Register">注册</a>
			            </div>
			            <div class="use_cont already_login">
			                <div class="use_img_cont">
			                    <img src="../images/use_img.jpg" alt="头像" />
			                </div>
			                <a class="use_msg_cont" href="/Personal/index">天使nancy</a>
			            </div>
			        </div>
			    </div>
			</header>
			)
	}
}