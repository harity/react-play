import React from 'react';
import PersonalRight from '../personal-right/index';
import './index.css';
const msg = ['大神申请','大神主页','接单记录','下单记录','充值','提现','明细','个人资料','安全设置','我的消息','我的评价'];

export default class PersonNav extends React.Component{
    constructor(){
        super();
        this.state={
            type:0
        }
    }
    handleClick(e){
        var arrindex = msg.indexOf(e.target.innerHTML);
        this.setState({
            type:arrindex
        })
    }
	render(){
		return(
			<div class="wrap usercenter_cont"> 
                <div class="userinfo_container fl">
                    <div class="uesr_head">
                        <img src="/images/use_img.jpg" alt="头像" />
                    </div>
                    <p class="user_name">天使nancy</p>
                    <div class="attention_cont">
                        <p class="small_line">
                            <span class="user_msg_txt_introduce">关注</span><span class="user_msg_txt_introduce">粉丝</span>
                        </p>
                        <p>
                            <span class="user_msg_txt_change">1000</span><span class="user_msg_txt_change">20</span>
                        </p>
                    </div>
                    <div class="uesr_msg">
                        <div class="user_msg_cont">
                            <p class="user_msg_cont_txt">
                                <span class="user_msg_txt_change user_id">6099</span>
                            </p>
                        </div>
                        <div class="user_msg_cont">
                            <p class="user_msg_cont_txt">
                                <span class="user_msg_txt_change user_vip">V0</span>
                                <a class="hover fr" href="#">VIP等级说明</a>
                            </p>
                        </div>
                        <div class="user_msg_cont">
                            <p class="user_msg_cont_txt">
                                <span class="user_msg_txt_introduce">可用：</span>
                                <span class="user_msg_txt_change user_usable_money">1234.90</span>
                                <a class="hover fr" href="#">充值</a>
                            </p>
                            <p class="user_msg_cont_txt">
                                <span class="user_msg_txt_introduce">冻结：</span>
                                <span class="user_msg_txt_change user_no_money">0.00</span>
                            </p>
                        </div>
                        <div class="user_msg_cont">
                            <p class="user_msg_cont_txt">
                                <span class="user_msg_txt_introduce">IP：</span>
                                <span class="user_msg_txt_introduce user_ip">192.168.1.1</span>
                            </p>
                            <p class="user_msg_cont_txt">
                                <span class="user_msg_txt_introduce">时：</span>
                                <span class="user_msg_txt_introduce user_time">2018-01-15 18:09</span>
                            </p>
                        </div>
                    </div>
                    <div class="personal_nav">
                        <ul>
                            <li>
                                <span>我的陪玩</span>
                                <dl>
                                    <dd><span>—</span><a class="personal_nav_apply"  onClick={this.handleClick.bind(this)}><span>大神申请</span></a></dd>
                                    <dd><span>—</span><a onClick={this.handleClick.bind(this)}><span>大神主页</span></a></dd>
                                    <dd><span>—</span><a onClick={this.handleClick.bind(this)}><span>接单记录</span></a></dd>
                                    <dd><span>—</span><a onClick={this.handleClick.bind(this)}><span>下单记录</span></a></dd>
                                </dl>
                            </li>
                            <li>
                                <span>我的钱包</span>
                                <dl>
                                    <dd><span>—</span><a href="#" target="personal_ifm"><span>充值</span></a></dd>
                                    <dd><span>—</span><a href="#" target="personal_ifm"><span>提现</span></a></dd>
                                    <dd><span>—</span><a href="#" target="personal_ifm"><span>明细</span></a></dd>
                                </dl>
                            </li>
                            <li>
                                <span>账号设置</span>
                                <dl>
                                    <dd><span>—</span><a href="#" target="personal_ifm"><span>个人资料</span></a></dd>
                                    <dd><span>—</span><a href="#" target="personal_ifm"><span>安全设置</span></a></dd>
                                </dl>
                            </li>
                            <li>
                                <span>消息中心</span>
                                <dl>
                                    <dd><span>—</span><a href="#" target="personal_ifm"><span>我的消息</span></a></dd>
                                    <dd><span>—</span><a href="#" target="personal_ifm"><span>我的评价</span></a></dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="personal_ifm_cont fl">
                    <PersonalRight cont={this.state.type}/>
                </div>
            </div>
			)
	}
}