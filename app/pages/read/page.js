/**
 * create: 2017-6-28 19:13:56
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 翻页
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ViewPagerAndroid,
	TouchableOpacity,
	Platform,
	Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Page extends Component {
	format(title, content){
		let {height, width} = Dimensions.get('window');
		let fontSize = 17;
		let cw = width - 16 * 2;
		let ch = height - 27 - 38;
		let count = Math.floor(cw / fontSize);
		let lines = Math.floor(ch / 28);
		console.log(count, lines);
		// 分段
		let parts = [];
		let character = content.split('');
		let c = 0;
		let l = 0;
		let part = '';
		let page = 0;
		while(character.length){
			let char = character.shift();
			part += char;
			if (++c > count || char === '\n') {
				c = 0;
				if (++l > lines) {
					// 存储
					parts.push({
						title : title,
						content : part,
						page : ++page
					});
					part = '';
					l = 0;
				}
			}
		}
		return parts;
	}
	componentDidMount() {
		setTimeout(() => {
			this.refs.test.measure((x, y, width, height, left, top) => {
				console.log(x, y, width, height, left, top);
			});
		});
	}
	render() {
		let { content, title } = this.props;
		let items = this.format(title, content);
		return (
			<View style={ style.container }>
				<Text ref='test' style={ [style.test, style.text] }>{ '　'.repeat(30) }</Text>
				{/*
				{ Platform.OS === 'ios' ?
				null : 
				<ViewPagerAndroid
					style={ style.full }
					initialPage={ 0 }>
					{ items.map( (item, index) => {
						return (
							<View style={ style.view } key={ index }>
								<TouchableOpacity activeOpacity={ 1 } style={ style.full }>
									<View style={ style.header }>
										<Text style={ style.title }>{ item.title }</Text>
									</View>
									<View style={ style.content }>
										<Text style={ style.text }>{ item.content }</Text>
									</View>
									<View style={ style.footer }>
										<View style={ style.footerLeft }>
											<View style={ style.battery }>
												<Icon style={ style.batteryIcon } name={ 'ios-battery-dead' } />
												<Text style={ style.batteryText }>100</Text>
											</View>
											<Text style={ style.time }>04:42</Text>
										</View>
										<Text style={ style.page }>{ item.page }/{ items.length }</Text>
									</View>
								</TouchableOpacity>
							</View>
						);
					}) }
				</ViewPagerAndroid> }*/}
			</View>
		);
	}
}

const style = StyleSheet.create({
	test : {
		backgroundColor : '#F695A7'
		// position : 'absolute',
		// left : -999,
		// top : -999
	},
	container : {
		height: 60,
		// backgroundColor : '#EAE5E0'
		backgroundColor : '#55B0F6'
	},
	full : {
		flex : 1,
	},
	view : {
		flex : 1,
		paddingHorizontal : 16
	},
	header : {
		height : 27
	},
	title : {
		fontSize : 13,
		color : '#7f7c79',
		paddingTop : 9
	},
	content : {
		flex : 1,
		justifyContent : 'space-between',
		alignItems : 'center',
		// backgroundColor : 'transparent'
		backgroundColor : '#55B0F6'
	},
	text : {
		fontSize : 17,
		color : '#333',
		// paddingVertical : Math.round(17 * 1.75 / 2)
		// lineHeight : Math.round(17 * 1.75)
		lineHeight : 30
	},
	footer : {
		height : 38,
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center'
	},
	footerLeft : {
		flexDirection : 'row'
	},
	battery : {
		position : 'relative',
		width : 24,
		justifyContent : 'center',
		alignItems : 'flex-end',
		marginRight : 8
	},
	batteryIcon : {
		color : '#7f7c79',
		position : 'absolute',
		fontSize : 28,
		top : -4,
		right : 0,
		transform : [{rotateY: '180deg'}]
	},
	batteryText : {
		color : '#7f7c79',
		fontSize : 9,
		width : 20,
		textAlign : 'center'
	},
	time : {
		color : '#7f7c79'
	},
	page : {
		color : '#7f7c79'
	}
});

export default Page;