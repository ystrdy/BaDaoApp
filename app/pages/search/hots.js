/**
 * create: 2017-6-22 14:46:03
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 搜索页的热门搜索组件
 */

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../common/config';

class Hots extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		let { books } = this.props;
		return (
			<View style={ style.container }>
				<View style={ style.container }>
					<View style={ style.header }>
						<Text style={ style.title }>大家都在搜</Text>{/*
						<View>
							<TouchableOpacity activeOpacity={ 0.5 } style={ style.refresh }>
								<Icon name='ios-refresh'
									style={ style.refreshIcon }>
								</Icon>
								<Text style={ style.refreshText }>换一批</Text>
							</TouchableOpacity>
						</View>*/}
					</View>
					<View style={ style.books }>{
						books.map((text, index) => {
							let r = index % colors.length,
								classes = [style.name, {
									backgroundColor : colors[r]
								}];
							return (
								<View style={ style.nameWrap } key={ index }>
									<TouchableOpacity activeOpacity={ 0.7 } style={ classes } onPress={ () => { this.onClick(text) } }>
										<Text style={ style.text }>{ text }</Text>
									</TouchableOpacity>
								</View>
							);
						})
					}</View>
				</View>
			</View>
		);
	}
	onClick(book){
		let { onClickItem } = this.props;
		if (onClickItem) {
			onClickItem(book);
		}
	}
}

Hots.propTypes = {
	books : PropTypes.arrayOf(PropTypes.string),
	onClickItem : PropTypes.func
};


const style = StyleSheet.create({
	container : {
		height : 150,
		backgroundColor : '#fff'		// 一个hack，不然溢出隐藏会失效
	},
	header : {
		flex : 20,
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center',
		marginTop : 16
	},
	title : {
		marginLeft : 14,
		color : '#000',
		fontSize : 11
	},
	refresh : {
		flex : 1,
		flexDirection : 'row',
		alignItems : 'center',
		marginRight : 16
	},
	refreshIcon : {
		fontSize : 18,
		color : '#000',
		marginRight : 5
	},
	refreshText : {
		fontSize : 11,
		color : '#000'
	},
	books : {
		flex : 114,
		flexDirection : 'row',
		flexWrap : 'wrap',
		marginLeft : 18,
		marginRight : 9
	},
	nameWrap : {
		height : 26,
		marginTop : 12,
		marginRight : 9,
	},
	name : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		paddingLeft : 12,
		paddingRight : 12,
		borderRadius : 3
	},
	text : {
		color : '#fff',
		fontSize : 13
	}
});

export default Hots;