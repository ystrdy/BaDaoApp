/**
 * create: 2017-6-23 11:27:59
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 详情页头部
 */

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View style={ style.container }>
				<View style={ style.inner }>
					<Icon name='ios-arrow-back-outline'
						style={ style.back }
						onPress={ this.back.bind(this) } />
					<Text style={ style.text }>书籍详情</Text>
				</View>
			</View>
		);
	}
	back(){
		let { onBack } = this.props;
		if (onBack) {
			onBack()
		}
	}
}

Header.propTypes = {
	text : PropTypes.string,
	onBack : PropTypes.func
};

const style = StyleSheet.create({
	container : {
		height: 42,
		backgroundColor : '#0fadf4'
	},
	inner : {
		flex : 1,
		flexDirection : 'row',
		alignItems : 'center'
	},
	back : {
		fontSize : 26,
		color : '#fff',
		width : 38,
		textAlign : 'center'
	},
	text : {
		width: 284,
		textAlign : 'center',
		color : '#fff',
		fontSize : 17
	}
});

export default Header;