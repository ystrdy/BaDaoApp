/**
 * create: 2017-6-23 16:49:32
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 详情页的书籍的标签
 */

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import { colors } from '../../common/config';

class Tags extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		let { tags } = this.props;
		return (
			<View style={ style.container }>
				{ tags.map((tag, index) => {
					let r = index % colors.length,
						color = {
							backgroundColor : colors[r]
						};
					return (
						<Text key={ index } style={ [style.tag, color ] }>{ tag }</Text>
					);
				}) }
			</View>
		);
	}
}

Tags.propTypes = {
	tags : PropTypes.arrayOf(PropTypes.string)
};

const style = StyleSheet.create({
	container : {
		flexDirection : 'row',
		flexWrap : 'wrap',
		alignItems : 'center',
		marginHorizontal : 15,
		marginTop : 15,
		paddingVertical : 10,
		borderTopWidth : 1,
		borderTopColor : '#E6E6E6',
		borderBottomWidth : 1,
		borderBottomColor : '#E6E6E6'
	},
	tag : {
		color : '#fff',
		marginVertical : 5,
		marginHorizontal : 8,
		paddingHorizontal : 5
	}
});

export default Tags;