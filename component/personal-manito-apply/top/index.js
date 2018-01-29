import React from 'react';
import './index.css';

export default class ApplyTop extends React.Component{
	
	constructor(props){
		super(props);		
	}
	
	render(){
		return(
			<div class="manito_top">
		        <p class="personal_title">大神申请>大神上分</p>
		        <div class="manito_top_plan">
		            <div class="manito_top_plan_bg"></div>
		            <div class="manito_top_plan_txt clearfix">
		                <span class="fl">信息初审</span>
		                <span class="fr">实力复审</span>
		            </div>
		        </div>
		        <div class="manito_top_game manito_top_step1 display">
		            <p class="choose_game"><span>选择游戏：</span>(首次认证只可选择一款游戏，通过后可在 "大神主页" 继续认证其他游戏)</p>
		            <div class="choose_game_cont">
		                <select class="game_name">
		                    <option value="value">选择游戏</option>
		                    <option value="value">绝地就剩</option>
		                    <option value="value">英雄联盟</option>
		                    <option value="value">王者荣耀</option>
		                </select>
		                <select class="game_area">
		                    <option value="value">选择区服</option>
		                </select>
		                <select class="game_value">
		                    <option value="value">选择段位</option>
		                </select>
		            </div>
		            <p class="upload_txt">上传最高段位截图：<a href="#" class="hover">查看示例</a></p>
		            <div class="upload_btn">
		                <button>上传图片</button>
		                <input class="upload_btn_file" type="file" name="img"  />
		            </div>
		            <div class="upload_show_img">
		                <p>图片展示区</p>
		                
		            </div>
		            <div class="manito_top_agree">
		                <input id="manito_top_agree" type="checkbox" name="name"  />
		                <span>我已阅读并同意</span>
		                <a href="#" class="hover">服务条款</a>
		            </div>
		            <span class="manito_top_btn">提交审核</span>
		        </div>
		        <div class="manito_top_msg manito_top_step2">
		            <div class="manito_top_step2_img bg_one"></div>
		            <div class="manito_top_step2_txt step2_txt1">
		                <p class="step2_txt_big">您的资料已经提交</p>
		                <p class="step2_txt_small">请耐心等待客服人员审核结果</p>
		            </div>
		            <div class="manito_top_step2_txt step2_txt2 display">
		                <p class="step2_txt_big">恭喜您进入实力复审</p>
		                <p class="step2_txt_small">请加入官方QQ群：345677890</p>
		                <p>耐心等待客服人员与您联系</p>
		            </div>
		            <div class="manito_top_step2_txt step2_txt3 display">
		                <p class="step2_txt_big">很遗憾，您未通过初审</p>
		                <p class="step2_txt_small">“上传截图段位与您选择的游戏信息不符”</p>
		                <button class="step2_txt_btn">重新提交</button>
		            </div>
		        </div>
		    </div>
			)
	}
}