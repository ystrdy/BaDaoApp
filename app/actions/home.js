/**
 * create: 2017-6-28 10:48:34
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 首页的actions
 */

import * as types from '../common/actionTypes';
import * as apis from '../common/apis';
import { createAction } from 'redux-actions';

const requestFavouriteBooks = createAction(types.REQUEST_FAVOURITE_BOOKS);
const receiveFavouriteBooks = createAction(types.RECEIVE_FAVOURITE_BOOKS);

export const fetchFavouriteBooks = function(){
	return dispatch => {
		dispatch(requestFavouriteBooks());
		return queryFavouriteBooks()
			.then(books => updateFavouriteBooks(books))
			.then(books => dispatch(receiveFavouriteBooks(books)));
	};
};

const queryFavouriteBooks = function(){
	
};

const updateFavouriteBooks = function(books){

};