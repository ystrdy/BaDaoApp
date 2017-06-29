/**
 * create: 2017-6-16 19:48:38
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 我的
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Mine extends Component {
	static navigationOptions = {
		title : 'Mine'
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