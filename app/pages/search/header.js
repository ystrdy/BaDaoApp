/**
 * create: 2017-6-22 19:21:40
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 搜索页头部
 */

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View style={ style.constainer }>
				<View style={ style.inner }>
					<Icon name='ios-arrow-back-outline'
						style={ style.back }
						onPress={ this.back.bind(this) } />
					<View style={ style.textInputWrap }>
						<TextInput style={ style.textInput }
							placeholder={ '搜索...' }
							underlineColorAndroid={ 'transparent' }
							placeholderTextColor={ '#fff' }
							autoCorrect={ false }
							autoCapitalize= { 'none' }
							selectionColor={ '#fff' }
							onChangeText={ this.change.bind(this) }
							onSubmitEditing={ this.search.bind(this) }
							value={ this.props.text } />
					</View>
					<Icon name='ios-search'
						style={ style.search }
						onPress={ this.search.bind(this) } />
				</View>
			</View>
		);
	}
	change(text){
		let { onChangeText } = this.props;
		if (onChangeText) {
			onChangeText(text);
		}
	}
	search(){
		let { onSearch } = this.props;
		if (onSearch) {
			onSearch();
		}
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
	onSearch : PropTypes.func,
	onBack : PropTypes.func,
	onChangeText : PropTypes.func
};

const style = StyleSheet.create({
	constainer : {
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
		flex : 38,
		textAlign : 'center'
	},
	textInputWrap : {
		flex : 360 - 38 - 38,
		justifyContent : 'center',
		alignItems : 'center'
	},
	textInput : {
		fontSize : 17,
		color : '#fff',
		width : 256,
		padding : 0
	},
	search : {
		fontSize : 26,
		color : '#fff',
		flex : 50,
		textAlign : 'center'
	}
});

export default Header;