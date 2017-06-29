/**
 * create: 2017-6-16 11:25:16
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 路由
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import Splash from '../pages/splash';
import Home from '../pages/home';
import Search from '../pages/search';
import Detail from '../pages/detail';
import Read from '../pages/read';

const Navigators = StackNavigator({
	Splash : { screen: Splash },
	Home : { screen: Home },
	Search : { screen: Search },
	Detail : { screen: Detail },
	Read : { screen: Read }
}, {
	navigationOptions : {
		header : null
	},
	transitionConfig: () => ({
		screenInterpolator: CardStackStyleInterpolator.forHorizontal,
	}),
	/*
	initialRouteName : 'Splash'
	initialRouteName : 'Search',
	initialRouteParams : {
		name : 'ben'
	}
	initialRouteName : 'Detail',
	initialRouteParams : {
		id : '6425678904047703'
	}
	*/
	initialRouteName : 'Read',
	initialRouteParams : {
		bid : '6425678904047703'
	}
});

export default Navigators;