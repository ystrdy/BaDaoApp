/**
 * create: 2017-6-22 19:21:40
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 详情页
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import Loading from '../../common/loading';
import Header from './header';
import Info from './info';
import Tags from './tags';
import Introduction from './introduction';
import Related from './related';

import {
	fetchDetail,
	favouriteBook,
	unfavouriteBook
} from '../../actions/detail';

class Detail extends Component {
	componentDidMount() {
		let { dispatch, navigation } = this.props;
		let { params } = navigation.state;
		dispatch(fetchDetail(params.id));
	}
	render() {
		let { detail, navigation } = this.props;
		let { params } = navigation.state;
		let { info, list, loaded, fav } = detail[params.id] || {};
		return (
			<View style={ style.container }>
				<Header onBack={ () => this.props.navigation.goBack() } />
				{ loaded ? 
					<ScrollView style={ style.content }>
						<View style={ style.book }>
							<Info follow={ fav }
								cover={ `http:${info.cover}` }
								name={ info.BookName }
								author={ info.Author }
								type={ info.SubCategoryName }
								words={ info.showWordsCnt }
								update={ info.updated_at }
								onFollow={ () => this.follow(info) }
								onUnFollow={ () => this.unfollow(info) }
								onRead={ () => this.read(info) } />
							<Tags tags={ info.TagArray.map(item => item.tagName) } />
							<Introduction content={ info.Description } />
						</View>
						<Related books={ list } onPress={ book => this.props.navigation.navigate('Detail', {id : book.sourceId}) } />
					</ScrollView> : <Loading />
				}
			</View>
		);
	}
	follow(book){
		let { dispatch } = this.props;
		dispatch(favouriteBook(book));
	}
	unfollow(book){
		let { dispatch } = this.props;
		dispatch(unfavouriteBook(book));
	}
	read(book){
		console.log(book);
	}
}

const style = StyleSheet.create({
	container : {
		flex : 1
	},
	content : {
		flex : 1,
		backgroundColor : '#E6E6E6'
	},
	book : {
		marginBottom : 10,
		backgroundColor : '#fff'
	}
});

const mapStateToProps = function(store){
	let { detail } = store;
	return {
		detail
	};
};

export default connect(mapStateToProps)(Detail);