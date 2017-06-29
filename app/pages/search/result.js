/**
 * create: 2017-6-26 14:17:01
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 搜索页结果列表
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
import { connect } from 'react-redux';

import Loading from '../../common/loading';

import { fetchResult } from '../../actions/search';

const ds = new ListView.DataSource({
	rowHasChanged : (r1, r2) => r1 !== r2
});

class Result extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const { dispatch } = this.props;
		const { params } = this.props.navigation.state;
		dispatch(fetchResult(params.name));
	}
	render(){
		let { result } = this.props.search;
		return result.loaded ? (
			result.list && result.list.length ? (
				<ListView style={ style.list }
					dataSource={ ds.cloneWithRows(result.list) }
					renderRow={ (row) => {
						let image = 'http:' + row.cover;
						return (
							<TouchableOpacity activeOpacity={ 0.75 } style={ style.item } onPress={ () => this.onRead(row) }>
								<Image style={ style.cover } source={ {uri: image} } />
								<View style={ style.info }>
									<Text style={ style.name } numberOfLines={ 1 }>{ row.title }</Text>
									<Text style={ style.chapter } numberOfLines={ 1 }>{ row.author }</Text>
									<Text style={ style.chapter } numberOfLines={ 1 }>{ row.intro }</Text>
								</View>
							</TouchableOpacity>
						);
					}} />
			) : ( // 没搜索到
				<View style={ style.empty }>
					<Text style={ style.emptyText }>未搜索到结果</Text>
				</View>
			)
		) : <Loading />;
	}
	onRead(book){
		let { onRead } = this.props;
		if (onRead) {
			onRead(book);
		}
	}
}

Result.propTypes = {
	navigation : PropTypes.object,
	onRead : PropTypes.func
};

const style = StyleSheet.create({
	list : {
		flex : 1
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
		marginRight : 10,
		marginLeft : 15
	},
	info : {
		flex : 1,
		justifyContent : 'space-around',
		paddingBottom : 5,
		paddingRight : 15
	},
	name : {
		fontSize : 16,
		color : '#000'
	},
	chapter : {
		fontSize : 12,
		color : '#999'
	},
	empty : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
	emptyText : {
		fontSize : 14,
		color : '#666'
	}
});

const mapStateToProps = store => {
	let { search } = store;
	return {
		search
	};
};

export default connect(mapStateToProps)(Result);

/*
import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	TouchableOpacity,
	Image
} from 'react-native';
import { connect } from 'react-redux';

import Loading from '../../common/loading';
import Header from './header';

import {
	fetchResult,
	addHistory
} from '../../actions/search';

const ds = new ListView.DataSource({
	rowHasChanged : (r1, r2) => r1 !== r2
});

class Result extends Component{
	constructor(props) {
		super(props);
		this.state = {
			keyword : ''
		};
	}
	componentDidMount() {
		const { dispatch } = this.props;
		const { params } = this.props.navigation.state;
		this.setState({
			keyword : params.name
		});
		dispatch(fetchResult(params.name));
	}
	render(){
		let { result } = this.props.search;
		return result.loaded ? (
			<View style={ style.container }>
				<Header text={ this.state.keyword }
					onChangeText={ (keyword) => this.setState({ keyword }) }
					onSearch={ this.search.bind(this) }
					onBack={ () => { this.props.navigation.goBack() } } />
				{
					result.list && result.list.length ? (
						<ListView style={ style.list }
							dataSource={ ds.cloneWithRows(result.list) }
							renderRow={ (row) => {
								let image = 'http:' + row.cover;
								return (
									<TouchableOpacity activeOpacity={ 0.75 } style={ style.item } onPress={ () => this.read(row) }>
										<Image style={ style.cover } source={ {uri: image} } />
										<View style={ style.info }>
											<Text style={ style.name } numberOfLines={ 1 }>{ row.title }</Text>
											<Text style={ style.chapter } numberOfLines={ 1 }>{ row.author }</Text>
											<Text style={ style.chapter } numberOfLines={ 1 }>{ row.intro }</Text>
										</View>
									</TouchableOpacity>
								);
							}} />
					) : ( // 没搜索到
						<View style={ style.empty }>
							<Text style={ style.emptyText }>未搜索到结果</Text>
						</View>
					)
				}
			</View>
		) : <Loading />;
	}
	search(keyword){
		if (keyword) {
			this.setState({ keyword });
		} else {
			keyword = this.state.keyword;
		}
		if (!keyword || !keyword.length) return;
		// 搜索记录写入数据库并且跳转
		let { dispatch, navigation } = this.props;
		dispatch(addHistory(keyword));
		// 搜索
		navigation.navigate('Search', { name: keyword });
	}
	read(book){
		console.log(book);
	}
};

Result.propTypes = {
	navigation : PropTypes.object
};

const style = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : '#fff'
	},
	list : {
		flex : 1
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
		marginRight : 10,
		marginLeft : 15
	},
	info : {
		flex : 1,
		justifyContent : 'space-around',
		paddingBottom : 5,
		paddingRight : 15
	},
	name : {
		fontSize : 16,
		color : '#000'
	},
	chapter : {
		fontSize : 12,
		color : '#999'
	},
	empty : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
	emptyText : {
		fontSize : 14,
		color : '#666'
	}
});

const mapStateToProps = store => {
	let { search } = store;
	return {
		search
	};
};

export default connect(mapStateToProps)(Result);
*/