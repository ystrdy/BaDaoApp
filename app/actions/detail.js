/**
 * create: 2017-6-23 17:39:17
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 详情页的actions
 */

import * as types from '../common/actionTypes';
import * as apis from '../common/apis';
import { createAction } from 'redux-actions';

const requestDetailAction = createAction(types.REQUEST_DETAIL);
const receiveDetailAction = createAction(types.RECEIVE_DETAIL);

const fetchBookInfo = function(id){
	return fetch(`${apis.BOOK_INFO}?bookid=${id}`)
		.then(response => response.json())
		.then(json => json.data);
};

const fetchRelated = function(){
	return fetch(apis.DETAIL_RELATED)
		.then(response => response.json())
		.then(json => json.data);
};

const fetchFavourite = function(id){
	let result = realm.objects('FavouriteBooks').filtered(`id == "${id}"`);
	return !!result.length;
};

export const fetchDetail = function(id){
	return dispatch => {
		dispatch(requestDetailAction({id}));
		Promise.all([
			fetchBookInfo(id),
			fetchRelated(),
			fetchFavourite(id)
		]).then(([info, list, fav]) => {
			if (info && list && list.length) {
				dispatch(receiveDetailAction({id, info, list, fav}));
			}
		});
	};
};

const receiveFavouriteBook = createAction(types.RECEIVE_FAVOURITE_BOOK);
export const favouriteBook = function(book){
	return dispatch => {
		realm.write(() => {
			realm.create('FavouriteBooks', {
				id : book.BookId,
				name : book.BookName,
				cover : book.cover,
				updateAt : book.updated_at
			});
			dispatch(receiveFavouriteBook(book.BookId));
		});
	};
};

const receiveUnFavouriteBook = createAction(types.RECEIVE_UNFAVOURITE_BOOK);
export const unfavouriteBook = function(book){
	return dispatch => {
		realm.write(() => {
			let result = realm.objects('FavouriteBooks').filtered(`id == "${book.BookId}"`);
			realm.delete(result);
			dispatch(receiveUnFavouriteBook(book.BookId));
		});
	};
};