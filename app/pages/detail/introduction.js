/**
 * create: 2017-6-23 17:10:50
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 详情页的书籍简介
 */

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Introduction extends Component{
	constructor(props) {
		super(props);
		this.state = {
			lines : 2
		};
	}
	render(){
		let { content } = this.props;
		return (
			<View style={ style.container }>
				<Text numberOfLines={ this.state.lines }
					style={ style.content }
					onPress={ this.onClick.bind(this) }>{ content }</Text>
			</View>
		);
	}
	onClick(){
		let { lines } = this.state;
		if (lines) {
			lines = null;
		} else {
			lines = 2;
		}
		this.setState({ lines });
	}
}

Introduction.propTypes = {
	content : PropTypes.string
};

const style = StyleSheet.create({
	container : {
		marginHorizontal : 15,
		paddingVertical : 10
	},
	content : {
		lineHeight : 24
	}
});

export default Introduction;