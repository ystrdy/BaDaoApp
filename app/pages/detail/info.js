/**
 * create: 2017-6-23 16:16:57
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 详情页的书籍基本信息
 */

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Info extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		let {
			follow,
			cover,
			name,
			author,
			type,
			words,
			update,
			onFollow,
			onUnFollow,
			onRead
		} = this.props;
		return (
			<View style={ style.container }>
				<View style={ style.content }>
					<Image source={{ uri: cover }} style={ style.cover } />
					<View style={ style.info }>
						<Text style={ style.name }>{ name }</Text>
						<Text style={ style.text }><Text style={ style.author }>{ author }</Text> | { type } | { words }</Text>
						<Text style={ style.date }>更新时间：{ update }</Text>
					</View>
				</View>
				<View style={ style.buttons }>
					{follow ?
						<TouchableOpacity activeOpacity={ 0.75 }
							style={ [style.button, style.disable] }
							onPress={ () => onUnFollow && onUnFollow() }>
							<Icon name='ios-remove'
								style={ style.buttonIcon } />
							<Text style={ style.buttonText }>不追了</Text>
						</TouchableOpacity> : 
						<TouchableOpacity activeOpacity={ 0.75 }
							style={ style.button }
							onPress={ () => onFollow && onFollow() }>
							<Icon name='ios-add'
								style={ style.buttonIcon } />
							<Text style={ style.buttonText }>追更新</Text>
						</TouchableOpacity>
					}
					<TouchableOpacity activeOpacity={ 0.75 }
						style={ style.button }
						onPress={ () => onRead && onRead() }>
						<Icon name='ios-book-outline'
							style={ style.buttonIcon } />
						<Text style={ style.buttonText }>开始阅读</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

Info.propTypes = {
	follow : PropTypes.bool,
	cover : PropTypes.string,
	name : PropTypes.string,
	author : PropTypes.string,
	type : PropTypes.string,
	words : PropTypes.string,
	update : PropTypes.string,
	onFollow : PropTypes.func,
	onUnFollow : PropTypes.func,
	onRead : PropTypes.func
};

const style = StyleSheet.create({
	container : {
		height : 166
	},
	content : {
		height : 130,
		padding : 15,
		flexDirection : 'row'
	},
	cover : {
		width : 75,
		height : 100,
		marginRight : 15
	},
	info : {
		justifyContent : 'space-around',
		paddingBottom : 3
	},
	name : {
		fontSize : 20,
		color : '#000'
	},
	text : {
		fontSize : 12,
		color : '#999'
	},
	author : {
		color : '#EC7460'
	},
	date : {
		fontSize : 14,
		color : '#999'
	},
	buttons : {
		height : 36,
		flexDirection : 'row'
	},
	button : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center',
		marginHorizontal : 15,
		backgroundColor : '#92C6EE',
		borderRadius : 5
	},
	disable : {
		backgroundColor : '#E6E6E6'
	},
	buttonIcon : {
		fontSize : 20,
		color : '#fff',
		marginRight : 10
	},
	buttonText : {
		fontSize : 16,
		color : '#fff'
	}
});

export default Info;