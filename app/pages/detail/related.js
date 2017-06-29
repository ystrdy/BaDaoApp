/**
 * create: 2017-6-23 17:28:46
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 详情页的猜你喜欢
 */

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	TouchableOpacity,
	Image
} from 'react-native';

const ds = new ListView.DataSource({
	rowHasChanged : (r1, r2) => r1 !== r2
});

class Related extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		let { books } = this.props;
		let element = null;
		if (Array.isArray(books) && books.length) {
			element = (
				<View style={ style.container }>
					<View style={ style.header }>
						<Text style={ style.title }>猜你喜欢</Text>
					</View>
					<ListView style={ style.list }
						dataSource={ ds.cloneWithRows(books) }
						renderRow={ (row) => {
							let image = 'http:' + row.cover;
							return (
								<TouchableOpacity activeOpacity={ 0.75 } style={ style.item } onPress={ () => this.onPress(row) }>
									<Image style={ style.cover } source={ {uri: image} } />
									<View style={ style.info }>
										<Text style={ style.name } numberOfLines={ 1 }>{ row.title }</Text>
										<Text style={ style.chapter } numberOfLines={ 1 }>{ row.author }</Text>
										<Text style={ style.chapter } numberOfLines={ 1 }>{ row.chapterTitle }</Text>
									</View>
								</TouchableOpacity>
							);
						}} />
				</View>
			);
		}
		return element;
	}
	onPress(book){
		let { onPress } = this.props;
		if (onPress) {
			onPress(book);
		}
	}
}

Related.propTypes = {
	books : PropTypes.arrayOf(PropTypes.object),
	onPress : PropTypes.func
};

const style = StyleSheet.create({
	container : {
		backgroundColor : '#fff',
		paddingHorizontal : 15
	},
	header : {
		height : 40,
		justifyContent : 'center'
	},
	title : {
		color : '#000',
		fontSize : 14
	},
	item : {
		borderTopWidth : 1,
		borderTopColor : '#E6E6E6',
		flexDirection : 'row',
		paddingVertical : 10
	},
	cover : {
		width : 60,
		height : 80,
		marginRight : 10
	},
	info : {
		justifyContent : 'space-around',
		// paddingTop : 5,
		paddingBottom : 5
	},
	name : {
		fontSize : 16,
		color : '#000'
	},
	chapter : {
		fontSize : 12,
		color : '#999'
	}
});

export default Related;