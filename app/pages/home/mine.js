/**
 * create: 2017-6-16 20:32:57
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 首页中我的
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Mine extends Component {
	static navigationOptions = {
		tabBarLabel : '我的',
		tabBarIcon : ({ focused, tintColor}) => (
			<Icon name='ios-contact-outline' style={{
				fontSize : 25,
				color : tintColor
			}} />
		)
	};
	render(){
		return (
			<View style={ style.container }>
				<Text>我的</Text>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	}
});

export default Mine;