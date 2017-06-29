/**
 * create: 2017-6-26 16:04:38
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 搜索的首页
 */

import React, { Component, PropTypes } from 'react';
import {
	Alert,
	View,
	Text,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import Loading from '../../common/loading';
import Hots from './hots';
import History from './history';

import { fetchHome, clearHistory } from '../../actions/search';

class Home extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let { dispatch } = this.props;
		dispatch(fetchHome());
	}
	render() {
		let { home } = this.props.search;
		return home.loaded ? (
			<View style={ style.container }>
				<Hots books={ home.hots } onClickItem={ this.onSearch.bind(this) } />
				<History history={ home.history } onClickItem={ this.onSearch.bind(this) } onTrash={ this.clear.bind(this) } />
			</View>
		) : <Loading />;
	}
	onSearch(kw){
		let { onSearch } = this.props;
		if (onSearch) {
			onSearch(kw);
		}
	}
	clear(){
		Alert.alert(
			'确认',
			'确认删除所有的搜索记录？',
			[{
				text: '取消',
				style: 'cancel'
			}, {
				text: '确定',
				onPress: () => {
					const { dispatch } = this.props;
					dispatch(clearHistory());
				}
			}],
			{
				cancelable: false
			}
		);
	}
};

Home.PropTypes = {
	navigation : PropTypes.object,
	onSearch : PropTypes.func
};

const style = StyleSheet.create({
	container : {
		flex : 1
	}
});

const mapStateToProps = function(store){
	let { search } = store;
	return {
		search
	};
};

export default connect(mapStateToProps)(Home);


/*
import React, { Component, PropTypes } from 'react';
import {
	Alert,
	View,
	Text,
	StyleSheet,
	InteractionManager
} from 'react-native';
import { connect } from 'react-redux';

import Loading from '../../common/loading';
import Header from './header';
import Hots from './hots';
import History from './history';

import {
	fetchHome,
	addHistory,
	clearHistory
} from '../../actions/search';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword : ''
		};
	}
	componentDidMount() {
		let { dispatch } = this.props;
		dispatch(fetchHome());
	}
	render() {
		let { home } = this.props.search;
		return home.loaded ? (
			<View style={ style.container }>
				<Header text={ this.state.keyword }
					onChangeText={ (keyword) => this.setState({ keyword }) }
					onSearch={ this.search.bind(this) }
					onBack={ () => { this.props.navigation.goBack() } } />
				<View style={ style.content }>
					<Hots books={ home.hots } onClickItem={ this.search.bind(this) } />
					<History history={ home.history } onClickItem={ this.search.bind(this) } onTrash={ this.clear.bind(this) } />
				</View>
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
	clear(){
		Alert.alert(
			'确认',
			'确认删除所有的搜索记录？',
			[{
				text: '取消',
				style: 'cancel'
			}, {
				text: '确定',
				onPress: () => {
					const { dispatch } = this.props;
					dispatch(clearHistory());
				}
			}],
			{
				cancelable: false
			}
		);
	}
};

Home.PropTypes = {
	navigation : PropTypes.object
};

const style = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : '#fff'
	},
	content : {
		flex : 1
	}
});

const mapStateToProps = function(store){
	let { search } = store;
	return {
		search
	};
};

export default connect(mapStateToProps)(Home);
*/