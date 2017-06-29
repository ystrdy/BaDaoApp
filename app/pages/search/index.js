/**
 * create: 2017-6-16 21:00:19
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 搜索
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import Header from './header';
import Home from './home';
import Result from './result';

import { addHistory } from '../../actions/search';

class Search extends Component {
	static navigationOptions = {
		header : null
	};
	constructor(props) {
		super(props);
		this.state = {
			keyword : ''
		};
	}
	componentDidMount() {
		let { params } = this.props.navigation.state;
		if (params && params.name) {
			this.setState({
				keyword : params.name
			});
		}
	}
	render() {
		let { navigation } = this.props;
		let { params } = navigation.state;
		return (
			<View style={ style.container }>
				<Header text={ this.state.keyword }
					onChangeText={ (keyword) => this.setState({ keyword }) }
					onSearch={ this.search.bind(this) }
					onBack={ () => { this.props.navigation.goBack() } } />
				{
					params && params.name ? (
						<Result navigation={ navigation } onRead={ this.read.bind(this) } />
					) : (
						<Home navigation={ navigation } onSearch={ this.search.bind(this) } />
					)
				}
			</View>
		);
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
		this.props.navigation.navigate('Detail', {id: book.sourceId});
	}
};

const style = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : '#fff'
	}
});

const mapStateToProps = function(store){
	let { search } = store;
	return {
		search
	};
};

export default connect(mapStateToProps)(Search);