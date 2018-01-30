import React from 'react';
import './index.css';

export default class OrderReceivRecord extends React.Component{
	render(){
		return(
			<div>
				<div class="order_record">
			        <p class="personal_title">接单记录><span class="order_type">上分订单</span></p>
			        <div class="order_type">
			            <span class="type_btn top_btn "><i></i>上分订单</span><span class="type_btn recreation_btn active"><i></i>陪玩订单</span>
			        </div>
			        <div class="order_cont display">
			            <div class="order_top_search">
			                <span class="game_name">游戏名称</span>
			                <select class="name_select">
			                    <option value="全部">全部</option>
			                </select>
			                <span class="order_state">订单状态</span>
			                <select class="state_select">
			                    <option value="全部">全部</option>
			                    <option value="待开始">待开始</option>
			                    <option value="进行中">进行中</option>
			                    <option value="已完成">已完成</option>
			                    <option value="异常">异常</option>
			                    <option value="已拒绝">已拒绝</option>
			                </select>
			                <span class="key">关键词</span>
			                <input class="key_inp" type="text" name="key" />
			                <button class="order_top_btn">查询</button>
			            </div>
			            <div class="order_msg">
			                <span>订单信息</span>
			                <span>订单价格</span>
			                <span>订单状态</span>
			                <span>操作</span>
			            </div>
			            <div class="order_list">
			                <div class="list_item list_top">

			                </div>
			            </div>
			        </div>
			        <div class="order_cont ">
			            <div class="order_recreation_search">
			                <span class="order_mold">类型</span>
			                <select class="mold_select">
			                    <option value="全部">全部</option>
			                </select>
			                <span class="game_name">游戏名称</span>
			                <select class="name_select">
			                    <option value="全部">全部</option>
			                </select>
			                <span class="order_state">订单状态</span>
			                <select class="state_select">
			                    <option value="全部">全部</option>
			                    <option value="待开始">待开始</option>
			                    <option value="进行中">进行中</option>
			                    <option value="已完成">已完成</option>
			                    <option value="异常">异常</option>
			                    <option value="已拒绝">已拒绝</option>
			                </select>
			                <span class="key">关键词</span>
			                <input class="key_inp" type="text" name="key" />
			                <button class="order_recreation_btn">查询</button>
			            </div>
			            <div class="order_msg">
			                <span>订单信息</span>
			                <span>订单价格</span>
			                <span>订单状态</span>
			                <span>操作</span>
			            </div>
			            <div class="order_list">
			                <div class="list_item list_recreation">
			                    <div class="order_number_cont">
			                        <div class="fl">
			                            <span>订单号：</span>
			                            <span class="order_number">12345689756335445</span>
			                        </div>
			                        <div class="fr">
			                            <span>下单人：</span>
			                            <span class="order_placer">大章鱼</span>
			                            <span class="chat hover">聊天</span>
			                        </div>
			                    </div>
			                    <div class="order_item_msg">
			                        <div class="order_time_cont">
			                            <p><span class="line_type">线上</span>王者荣耀-手Q大区-最强王者-1局</p>
			                            <p><span>接单时间：</span><span class="order_time">2018-09-10 16:22:22</span></p>
			                        </div>
			                        <div class="order_money">
			                            <span>8.0</span>
			                        </div>
			                        <div class="order_state">
			                            <span>待开始</span>
			                        </div>
			                        {/*<div class="order_operation two">
			                            <p class="order_handle hover">开始</p>
			                            <a class="order_details hover" href="#">订单详情</a>
			                        </div>*/}
			                        <div class="order_operation one">
			                            <a class="order_details hover" href="#">订单详情</a>
			                        </div>
			                    </div>
			                </div>
			                <div class="list_item list_recreation">
			                    <div class="order_number_cont">
			                        <div class="fl">
			                            <span>订单号：</span>
			                            <span class="order_number">12345689756335445</span>
			                        </div>
			                        <div class="fr">
			                            <span>下单人：</span>
			                            <span class="order_placer">大章鱼</span>
			                            <span class="chat hover">聊天</span>
			                        </div>
			                    </div>
			                    <div class="order_item_msg">
			                        <div class="order_time_cont">
			                            <p>王者荣耀-手Q大区-最强王者-1局</p>
			                            <p><span>接单时间：</span><span class="order_time">2018-09-10 16:22:22</span></p>
			                        </div>
			                        <div class="order_money">
			                            <span>8.0</span>
			                        </div>
			                        <div class="order_state">
			                            <span>待开始</span>
			                        </div>
			                        <div class="order_operation two">
			                            <p class="order_handle hover">开始</p>
			                            <a class="order_details hover" href="#">订单详情</a>
			                        </div>
			                        {/*<div class="order_operation one">
			                            <a class="order_details hover" href="#">订单详情</a>
			                        </div>*/}
			                    </div>
			                </div>
			                <div class="no_order display">
			                    <div class="no_bg"></div>
			                    <h2>暂无接单记录</h2>
			                    <p>前往<a class="hover" href="#">“抢单页面”</a>开启您的上分之旅吧</p>
			                </div>
			            </div>
			        </div>
			    </div>
			    {/*游戏结果-绝地求生*/}
			    <div class="game_result display">
			        <div class="game_result_PUBG">
			            <p class="game_result_title">填写游戏结果</p>
			            <div class="game_result_PUBG_cont">
			                <div class="game_result_PUBG_item">
			                    <span>第一局：</span>
			                    <select>
			                        <option value="value">排名</option>
			                        <option value="第一名">第一名</option>
			                        <option value="第二名">第二名</option>
			                        <option value="第三名">第三名</option>
			                        <option value="4-10名">4-10名</option>
			                        <option value=">10名">>10名</option>
			                    </select>
			                    <select>
			                        <option value="value">击杀人数</option>
			                        <option value="1">1</option>
			                        <option value="2">2</option>
			                        <option value="3">3</option>
			                        <option value="4">4</option>
			                        <option value="5">5</option>
			                        <option value="6">6</option>
			                        <option value="7">7</option>
			                        <option value="8">8</option>
			                        <option value="9">9</option>
			                        <option value="10或10+">10或10+</option>
			                    </select>
			                </div>
			                <div class="game_result_PUBG_item">
			                    <span>第二局：</span>
			                    <select>
			                        <option value="value">排名</option>
			                        <option value="第一名">第一名</option>
			                        <option value="第二名">第二名</option>
			                        <option value="第三名">第三名</option>
			                        <option value="4-10名">4-10名</option>
			                        <option value=">10名">>10名</option>
			                    </select>
			                    <select>
			                        <option value="value">击杀人数</option>
			                        <option value="1">1</option>
			                        <option value="2">2</option>
			                        <option value="3">3</option>
			                        <option value="4">4</option>
			                        <option value="5">5</option>
			                        <option value="6">6</option>
			                        <option value="7">7</option>
			                        <option value="8">8</option>
			                        <option value="9">9</option>
			                        <option value="10或10+">10或10+</option>
			                    </select>
			                </div>
			                <div class="game_result_PUBG_item">
			                    <span>第三局：</span>
			                    <select>
			                        <option value="value">排名</option>
			                        <option value="第一名">第一名</option>
			                        <option value="第二名">第二名</option>
			                        <option value="第三名">第三名</option>
			                        <option value="4-10名">4-10名</option>
			                        <option value=">10名">>10名</option>
			                    </select>
			                    <select>
			                        <option value="value">击杀人数</option>
			                        <option value="1">1</option>
			                        <option value="2">2</option>
			                        <option value="3">3</option>
			                        <option value="4">4</option>
			                        <option value="5">5</option>
			                        <option value="6">6</option>
			                        <option value="7">7</option>
			                        <option value="8">8</option>
			                        <option value="9">9</option>
			                        <option value="10或10+">10或10+</option>
			                    </select>
			                </div>
			                <div class="game_result_PUBG_item">
			                    <span>第四局：</span>
			                    <select>
			                        <option value="value">排名</option>
			                        <option value="第一名">第一名</option>
			                        <option value="第二名">第二名</option>
			                        <option value="第三名">第三名</option>
			                        <option value="4-10名">4-10名</option>
			                        <option value=">10名">>10名</option>
			                    </select>
			                    <select>
			                        <option value="value">击杀人数</option>
			                        <option value="1">1</option>
			                        <option value="2">2</option>
			                        <option value="3">3</option>
			                        <option value="4">4</option>
			                        <option value="5">5</option>
			                        <option value="6">6</option>
			                        <option value="7">7</option>
			                        <option value="8">8</option>
			                        <option value="9">9</option>
			                        <option value="10或10+">10或10+</option>
			                    </select>
			                </div>
			            </div>
			            <div class="game_result_PUBG_btn_cont">
			                <button class="game_result_PUBG_ok">提交</button><button class="game_result_PUBG_cancel">取消</button>
			            </div>
			        </div>
			    </div>
			    
			    {/*游戏结果-其他游戏*/}
			    <div class="game_result display">
			        <div class="game_result_other">
			            <p class="game_result_title">填写游戏结果</p>
			            <div class="game_result_other_cont">
			                <select>
			                    <option value="value">选择结果</option>
			                    <option value="胜">胜</option>
			                    <option value="输">输</option>
			                </select>
			            </div>
			            <div class="game_result_PUBG_btn_cont">
			                <button class="game_result_PUBG_ok">提交</button><button class="game_result_PUBG_cancel">取消</button>
			            </div>
			        </div>
			    </div>
			</div>
			)
	}
}