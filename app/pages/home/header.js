/**
 * create: 2017-6-27 17:31:51
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 首页头部
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component{
	render() {
		return (
			<View style={ style.container }>
				<Text style={ style.title }>霸道书城</Text>
				{ Platform.OS === 'ios' ?
			    <TouchableOpacity activeOpacit={ 0.75 }
			    	onPress={ () => this.props.navigation.navigate('Search') }>
			    	<Icon name='ios-search'
			            style={ style.search } />
			    </TouchableOpacity> : 
			    <TouchableNativeFeedback 
			    	onPress={ () => this.props.navigation.navigate('Search') }
			        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
			        <View style={ style.searchWrap }>
			        	<Icon name='ios-search' style={ style.search } />
			        </View>
			    </TouchableNativeFeedback> }
			</View>
		);
	}
}

const style = StyleSheet.create({
	container : {
		height: 42,
		backgroundColor : '#0fadf4',
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center'
	},
	title : {
		fontSize : 17,
		color : '#fff',
		marginLeft : 15
	},
	searchWrap : {
		width : 55,
		height: 42,
		justifyContent : 'center',
		alignItems : 'center'
	},
	search : {
		fontSize : 25,
		color : '#fff'
	}
});

export default Header;