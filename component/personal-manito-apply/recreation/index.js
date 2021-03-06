import React from 'react';
import './index.css';

export default class ApplyRecreation extends React.Component{
	
	constructor(props){
		super(props);
		
	}
	
	render(){
		return(
			<div class="manito_recreation">
		        <p class="personal_title">大神申请>娱乐陪玩</p>
		        <div class="manito_recreation_cont">
		            <div class="row_cont">
		                <span class="row_title">主页头像：</span>
		                <button class="head_btn">点击上传</button>
		                <input type="file" name="head" value=" " />
		                <span class="row_msg">必须是露脸照片，尺寸要求：</span>
		            </div>
		            <div class="row_cont row_img_cont">
		                <span class="row_title"></span>
		                <div class="head_cont">
		                    {/*<span class="row_cont_img_txt">图片展示区</span>*/}
		                    <img src="/images/Img/use_img.jpg" />
		                </div>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">选择性别：</span>
		                <input type="radio" name="six" checked value="1" />
		                <span>女</span>
		                <input type="radio" name="six" value="2" />
		                <span>男</span>
		                <span class="row_msg">认证后不可修改</span>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">所在城市：</span>
		                <select class="city_province" size="1">
		                    <option value="value">省份</option>
		                    <option value="value">浙江省</option>
		                    <option value="value">江苏省</option>
		                    <option value="value">上海</option>
		                    <option value="value">黑龙江</option>
		                    <option value="value">赏析</option>
		                    <option value="value">先</option>
		                    <option value="value">选啊实打实的</option>
		                    <option value="value">浙江省</option>
		                    <option value="value">江苏省</option>
		                    <option value="value">上海</option>
		                    <option value="value">黑龙江</option>
		                    <option value="value">赏析</option>
		                    <option value="value">先</option>
		                    <option value="value">黑龙江</option>
		                    <option value="value">赏析</option>
		                    <option value="value">先</option>
		                    <option value="value">选啊实打实的</option>
		                    <option value="value">浙江省</option>
		                    <option value="value">江苏省</option>
		                    <option value="value">上海</option>
		                    <option value="value">黑龙江</option>
		                    <option value="value">赏析</option>
		                    <option value="value">先</option>
		                    <option value="value">选啊实打实的</option>
		                    <option value="value">浙江省</option>
		                    <option value="value">江苏省</option>
		                    <option value="value">上海</option>
		                    <option value="value">黑龙江</option>
		                    <option value="value">赏析</option>
		                    <option value="value">先</option>
		                    <option value="value">选啊实打实的</option>
		                </select>
		                <select class="city_town">
		                    <option value="value">城市</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                </select>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">选择游戏：</span>
		                <select class="gama_name">
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                    <option value="value">选择游戏</option>
		                </select>
		                <select class="game_area">
		                    <option value="value">选择区服</option>
		                </select>
		                <select class="game_value">
		                    <option value="value">选择段位</option>
		                </select>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">段位截图：</span>
		                <button class="grade_btn">点击上传</button>
		                <input type="file" name="grade" value=" " />
		                <span class="row_msg">上传最高段位截图，<a class="hover" href="#">查看示例</a></span>
		            </div>
		            <div class="row_cont row_img_cont">
		                <span class="row_title"></span>
		                <div class="grade_cont">
		                    {/*<span class="row_cont_img_txt">图片展示区</span>*/}
		                    <img src="/images/use_img.jpg" />
		                </div>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">陪打价格：</span>
		                <select class="online_price">
		                    <option value="value">线上陪玩</option>
		                </select>
		                <select class="offline_price">
		                    <option value="value">线下陪玩</option>
		                </select>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">陪打标签：</span>
		                <select class="choose_label">
		                    <option value="包星包赢">包星包赢</option>
		                    <option value="带你飞">带你飞</option>
		                    <option value="语音陪打">语音陪打</option>
		                    <option value="有车队">有车队</option>
		                    <option value="打野">打野</option>
		                </select>
		                <input class="self_label" type="text" name="selt_lebel"  placeholder="输入自定义标签，按回车添加"/>
		                <span class="row_msg">最多设置10个标签</span>
		            </div>
		            <div class="row_cont row_img_cont">
		                <span class="row_title"></span>
		                <div class="label_cont">
		                    <span class="row_cont_img_txt">标签展示区</span>
		                </div>
		            </div>
		            <div class="row_cont">
		                <span class="row_title service_row_title">服务说明：</span>
		                <textarea class="service" name="service" placeholder="输入服务说明用来吸引客户下单，不允许广告、色情、暴力、微信、QQ等信息"></textarea>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">个人照片：</span>
		                <button class="self_btn">点击上传</button>
		                <input type="file" name="self" value=" " />
		                <span class="row_msg">必须为露脸真实个人照片否则无法通过审核。做多上传9张。尺寸要求：</span>
		            </div>
		            <div class="row_cont row_img_cont">
		                <span class="row_title"></span>
		                <div class="self_cont">
		                    {/*<span class="row_cont_img_txt">图片展示区</span>*/}
		                    <div class="self_img">
		                        <i></i>
		                        <img src="/images/use_img.jpg" />
		                    </div>
		                </div>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">战绩截图：</span>
		                <button class="standings_btn">点击上传</button>
		                <input type="file" name="standings" value=" " />
		                <span class="row_msg"><a class="hover" href="#">查看示例</a></span>
		            </div>
		            <div class="row_cont row_img_cont">
		                <span class="row_title"></span>
		                <div class="standings_cont">
		                    <span class="row_cont_img_txt">图片展示区</span>
		                </div>
		            </div>
		            <div class="row_cont">
		                <span class="row_title">个人音频：</span>
		                <button>点击上传</button>
		                <input type="file" name="vioce" value=" " />
		                <span class="row_msg">必须为真人声音，切不少于5秒，不长于15秒，否则无法通过审核。格式需为MP3</span>
		            </div>
		            <div class="row_cont row_img_cont">
		                <span class="row_title"></span>
		                <div class="vioce_cont">
		                    <span class="row_cont_img_txt row_cont_vioce_txt">上传文件名展示区</span>
		                </div>
		            </div>
		            <div class="check_cont">
		                <input type="checkbox" name="agree" value=" " />
		                <span>我已阅读并同意<a class="hover" href="#">服务条款</a></span>
		            </div>
		            <div class="recreation_cont">
		                <button class="recreation_check_btn">提交审核</button>
		            </div>
		        </div>
		        <div class="manito_recreation_step display">
		            <div class="manito_recreation_step2_img bg_one"></div>
		            <div class="manito_recreation_step2_txt step2_txt1">
		                <p class="step2_txt_big">您的资料已经提交</p>
		                <p class="step2_txt_small">请耐心等待客服人员审核结果</p>
		            </div>
		            <div class="manito_recreation_step2_txt step2_txt2 display">
		                <p class="step2_txt_big">恭喜您通过大神认证</p>
		                <p class="step2_txt_small">前往<a class="hover" href="#">“大神主页”</a>开启您的大神之旅吧</p>
		            </div>
		            <div class="manito_recreation_step2_txt step2_txt3 display">
		                <p class="step2_txt_big">很遗憾，您未通过初审</p>
		                <p class="step2_txt_small">“上传截图段位与您选择的游戏信息不符”</p>
		                <button class="step2_txt_btn">重新提交</button>
		            </div>
		        </div>
		    </div>
			)
	}
}