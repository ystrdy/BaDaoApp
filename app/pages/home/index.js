/**
 * create: 2017-6-16 20:32:57
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 首页
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './header';
import Shelf from './shelf';
import Discover from './discover';
import Mine from './mine';

const Tab = TabNavigator({
	Shelf 		: { screen : Shelf },
	Discover 	: { screen : Discover },
	Mine 		: { screen : Mine }
}, {
	tabBarPosition : 'bottom',
	tabBarOptions : {
		showIcon : true,
		labelStyle : {
			fontSize : 12,
			margin : 0
		},
		style : {
			height : 54,
			backgroundColor : '#fff',
			borderTopWidth : 1,
			borderTopColor : '#E6E6E6'
		},
		indicatorStyle : {
			height: 0
		},
		activeTintColor : '#54AAF8',
		inactiveTintColor : '#8E8E8E'
	}
});

class Home extends Component {
	render(){
		return (
			<View style={ style.container }>
				<Header navigation={ this.props.navigation } />
				<Tab />
			</View>
		);
	}
}

const style = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : '#fff'
	},
	search : {
		fontSize : 25
	}
});

export default Home;