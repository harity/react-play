import React from 'react';
import './index.css';

export default class PersonalRightWelcome extends React.Component{
	render(){
		return(
			<div>
				<div class="welcome_nav">
			        <ul>
			            <li class="apply">
			                <img src="/images/apply.png" alt="大神申请" />
			                <p>大神申请</p>
			            </li>
			            <li class="home">
			                <img src="/images/home.png" alt="大神主页" />
			                <p>大神主页</p>
			            </li>
			            <li class="order">
			                <img src="/images/order.png" alt="我的订单" />
			                <p>我的订单</p>
			            </li>
			            <li class="my_wallet">
			                <img src="/images/my_wallet.png" alt="我的钱包" />
			                <p>我的钱包</p>
			            </li>
			            <li class="real_name">
			                <img src="/images/real_name.png" alt="实名认证" />
			                <p>实名认证</p>
			            </li>
			            <li class="call_manito">
			                <img src="/images/apply.png" alt="呼叫大神" />
			                <p>呼叫大神</p>
			            </li>
			            <li class="play_with">
			                <img src="/images/apply.png" alt="秒约陪玩" />
			                <p>秒约陪玩</p>
			            </li>
			        </ul>
			    </div>
			    <div class="">

			    </div>
			</div>
			)
	}
}