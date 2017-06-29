/**
 * create: 2017-6-27 18:17:32
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 首页中发现
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Discover extends Component {
	static navigationOptions = {
		tabBarLabel : '发现',
		tabBarIcon : ({ focused, tintColor}) => (
			<Icon name='ios-compass-outline' style={{
				fontSize : 25,
				color : tintColor
			}} />
		)
	};
	render(){
		return (
			<View style={ style.container }>
				<Text>发现</Text>
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

export default Discover;