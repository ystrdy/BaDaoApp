/**
 * create: 2017-6-22 15:35:50
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 搜索页的搜索记录组件
 */

import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ListView,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ds = new ListView.DataSource({
	rowHasChanged : (r1, r2) => r1 !== r2
});

class History extends Component{
	constructor(props) {
		super(props);
/*
		var ds = 
		this.state = {
			histroy : ds.cloneWithRows([
				'择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记',
				'恐怖广播',
				'民调局异闻录之勉传',
				'道辟九霄',
				'邪性鬼夫，夜夜撩',
				'择天记',
				'恐怖广播',
				'民调局异闻录之勉传',
				'道辟九霄',
				'邪性鬼夫，夜夜撩',
				'择天记',
				'恐怖广播',
				'民调局异闻录之勉传',
				'道辟九霄',
				'邪性鬼夫，夜夜撩'
			])
		};
		realm.write(() => {
			let array = [
				'择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记择天记',
				'恐怖广播',
				'民调局异闻录之勉传',
				'道辟九霄',
				'邪性鬼夫，夜夜撩',
				'择天记',
				'恐怖广播',
				'民调局异闻录之勉传',
				'道辟九霄',
				'邪性鬼夫，夜夜撩',
				'择天记',
				'恐怖广播',
				'民调局异闻录之勉传',
				'道辟九霄',
				'邪性鬼夫，夜夜撩'
			];
			array.forEach((text, index) => {
				let now = new Date();
				now.setHours(now.getHours() - index);
				realm.create('History', {
					name : text,
					createTime : now
				});
			});
		});
*/
	}
	render(){
		let { history } = this.props;
		let element = null;
		if (history && history.length) {
			element = (
				<View style={ style.container }>
					<View style={ style.headerWrap }>
						<View style={ style.header }>
							<Text style={ style.title }>搜索历史</Text>
							<View>
								<TouchableOpacity activeOpacity={ 0.5 } style={ style.trash } onPress={ this.onTrash.bind(this) }>
									<Icon name='ios-trash'
										style={ style.trashIcon }>
									</Icon>
									<Text style={ style.trashText }>清空</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<ListView style={ style.list }
						dataSource={ ds.cloneWithRows(history) }
						renderRow={ (row) => {
							return (
								<TouchableOpacity activeOpacity={ 0.75 } style={ style.itemWrap } onPress={ () => this.onClick(row) }>
									<View style={ style.item }>
										<Icon name='ios-clock-outline'
											style={ style.itemIcon }>
										</Icon>
										<Text style={ style.itemText } numberOfLines={ 1 }>{ row }</Text>
									</View>
								</TouchableOpacity>
							);
						}} />
				</View>
			);
		}
		return element;
	}
	onTrash(){
		let { onTrash } = this.props;
		if (onTrash) {
			onTrash();
		}
	}
	onClick(book){
		let { onClickItem } = this.props;
		if (onClickItem) {
			onClickItem(book);
		}
	}
}

History.propTypes = {
	history : PropTypes.arrayOf(PropTypes.string),
	onClickItem : PropTypes.func,
	onTrash : PropTypes.func
};

const style = StyleSheet.create({
	container : {
		flex : 1
	},
	headerWrap : {
		marginTop : 16,
		height : 29
	},
	header : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center'
	},
	title : {
		fontSize : 11,
		color : '#000',
		marginLeft : 14
	},
	trash : {
		flex : 1,
		flexDirection : 'row',
		alignItems : 'center',
		marginRight : 16
	},
	trashText : {
		fontSize : 11,
		color : '#000'
	},
	trashIcon : {
		fontSize : 16,
		color : '#000',
		marginRight : 5
	},
	itemWrap : {
		height : 38,
	},
	item : {
		flex : 1,
		flexDirection : 'row',
		alignItems : 'center',
		paddingLeft : 18,
		paddingRight : 18
	},
	itemIcon : {
		fontSize : 22,
		color : '#000',
		marginLeft : 5,
		marginRight : 10
	},
	itemText : {
		fontSize : 14,
		color : '#000',
		marginRight : 30
	}
});

export default History;