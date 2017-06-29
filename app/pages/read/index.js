/**
 * create: 2017-6-28 11:33:20
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 阅读页面
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	ScrollView,
	ViewPagerAndroid
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import Page from './page';

class Read extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statusBarVisible : true
		};
	}
	render(){
		return (
			<View style={ style.container }>
				<StatusBar hidden={ this.state.statusBarVisible }/>
				{/*
				<ScrollView style={ style.cont }
					horizontal={ true }
					showsHorizontalScrollIndicator={ false }
					showsVerticalScrollIndicator={ false }
					pagingEnabled={ true }>
				</ScrollView>*/}
				<Page content={ "如果能，她想成为一只鸟儿，在天空飞翔。\n————————————————————\nW市的8月，热气腾腾的夏天，海边的风很凉爽，阳光清澈，海边的国道线整洁，空气里弥漫着海水混合着泥土的质朴气味。\n袁禾舒左手手里拿着一瓶矿泉水，右手朝着国道上路过的车辆不停的招手，后背背着一个不知哪一年款式的背包，脚边还有一个与她气质不符的行李箱，一个女孩大包小包地站在蜿蜒的国道上向过往的车辆挥手，任谁看到都不会停下车来。\n渐渐的，太阳慢慢落山了，天也很快黑下来。\n袁禾舒此刻是又累又渴，坐在行李箱上，看着矿泉水瓶里仅剩的一滴水，不得不扭开瓶盖仰头把最后一滴水倒进嘴里。\n这里离S市中心几十多里路，就算走，她在天亮之前也不一定走到市区！\n能来海边豪华度假村度假游玩的，大多是有钱人，谁会可怜她让她搭车？\n现在已经七点多了，天很快完全黑下来，到时候别说财产安全了，就连她个人安全都没有办法得到保障！\n烈日当头，看着车开过来的方向，袁禾舒只觉一阵阵恍惚，心里有千言万语，瞬间视线开始模糊起来。\n吸了吸鼻头，抬头看向远方海面上的天空，一群群海鸥排列成漂亮的队形飞过。\n记得以前她在作文题目“如果，———”中写过，如果能，她想成为一只鸟儿，在天空飞翔。\n看鸟呆了久了，袁禾舒后来想想，自己哭也不能解决办法，只好偷偷的抹眼泪，仔仔细细观察起来，她决定了，与其向一辆辆轿车招手，还不如去拦截一辆民用车！\n一直等到八点多，才看到一辆皮卡车驶过来。\n站到路中间，张开双臂拦！截！车！辆！\n皮卡车上的司机见到这么不要命的女孩，不得不停下来，从后视镜里观察后排三个的男孩的表情，额头直飙汗。\n本来他打算明早要带着他媳妇儿到市里的医院做产检，这三个男孩子找到他的时候，说他们的车坏了，需要今晚出发回到市区，但考虑到媳妇儿的身体吃不消他有些犹豫，但其中一个男孩保证说，除了给他车费，到了市区还会安排医生给他媳妇做详细产检，并且当场打电话安排，所以他才放下心来送他们回市区。要知道，这年头，在医院挂个号都挺不容易的，更何况还要安排床位！\n从他们全身上下散发出来的气质，还有当场打电话安排医院的事宜来看，他们的身份非同小可，令他不得不注意到他们的感受。\n副驾驶的妇女摇下车窗，面露关心，问：“小妹妹，你怎么了？”\n袁禾舒抹了一把汗，走到副驾驶座窗边，急切道：“这么晚了，我没赶到前往S市的车，请问能不能搭你们的车？”\n看他们面善，袁禾舒直截了当的说出自己的困难，看得出，眼前的妇女和司机是夫妻。\n司机有些为难，“可是我们已经没有座位了，我看你还是……”\n" }
					title={ '第一章 拦车' }/>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container : {
		flex : 1
	}
});

const mapStateToProps = function(store){
	let { read } = store;
	return { read };
};

export default connect(mapStateToProps)(Read);

