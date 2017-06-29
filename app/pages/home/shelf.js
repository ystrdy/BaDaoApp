/**
 * create: 2017-6-16 20:32:57
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 首页中书架
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import { fetchFavouriteBooks } from '../../actions/home';

class Shelf extends Component {
	static navigationOptions = {
		tabBarLabel : '书架',
		tabBarIcon : ({ focused, tintColor}) => (
			<Icon name='ios-book-outline' style={{
				fontSize : 25,
				color : tintColor
			}} />
		)
	};
	componentDidMount() {
		let { dispatch } = this.props;
	}
	render(){
		return (
			<View style={ style.container }>
				<Text>书架</Text>
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

const mapStateToProps = function(store){
	let { home } = store;
	return { home };
};

export default connect(mapStateToProps)(Shelf);