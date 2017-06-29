/**
 * create: 2017-6-26 16:39:24
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 公用的加载中组件
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import Spinner from 'react-native-spinkit';

class Loading extends Component{
	render() {
		return (
			<View style={ style.container }>
				<Spinner type={ '9CubeGrid' } color={ '#0FADF4' } />
				<Text style={ style.text }>正在加载中...</Text>
			</View>
		);
	}
};

const style = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#fff'
	},
	text : {
		fontSize : 14,
		color : '#666',
		lineHeight : 28
	}
});

export default Loading;