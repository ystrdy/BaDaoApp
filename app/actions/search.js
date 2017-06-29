/**
 * create: 2017-6-22 11:28:34
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 搜索页的actions
 */

import * as types from '../common/actionTypes';
import * as apis from '../common/apis';
import { createAction } from 'redux-actions';

const requestHomeAction = createAction(types.REQUEST_HOME);
const receiveHomeAction = createAction(types.RECEIVE_HOME);
const receiveHistoryAction = createAction(types.RECEIVE_HISTORY);

export const fetchHome = function(){
	return dispatch => {
		dispatch(requestHomeAction());
		return Promise.all([
			fetchHots(),
			fetchHistory()
		]).then(([hots, history]) => {
			dispatch(receiveHomeAction({ hots, history}));
		});
	};
};

const fetchHots = function(){
	return fetch(apis.HOT_SEARCH)
		.then(response => response.json())
		.then(json => new Promise(resolve =>{
			let data = [];
			try{
				data = json.data;
			} catch(e){}
			if (!Array.isArray(data)) {
				data = [];
			}
			resolve(data.map(item => item.title));
		}));
};

const fetchHistory = function(){
	return new Promise(resolve => {
		let histories = realm.objects('SearchHistory').sorted('createTime', true);
		resolve(histories.map(h => h.name));
	});
};

export const clearHistory = function(){
	return dispatch => {
		realm.write(() => {
			let histories = realm.objects('SearchHistory');
			realm.delete(histories);

			fetchHistory().then(data => dispatch(receiveHistoryAction(data)));
		});
	};
};

export const addHistory = function(name){
	return dispatch => {
		realm.write(() => {
			let result = realm.objects('SearchHistory').filtered('name==$0', name);
			// 判断数据库里面是否已经存在记录了，如果已经存在，那么就更新，否则添加记录
			if (result.length) {
				result.forEach(item => {
					item.createTime = new Date();
				});
			} else {
				realm.create('SearchHistory', {
					name : name,
					createTime : new Date()
				});
			}

			fetchHistory().then(data => dispatch(receiveHistoryAction(data)));
		});
	};
};

const requestResultAction = createAction(types.REQUEST_RESULT);
const receiveResultAction = createAction(types.RECEIVE_RESULT);

export const fetchResult = function(name){
	return dispatch => {
		dispatch(requestResultAction());
		let qs = `keyword=${encodeURIComponent(name).replace(/%20/g, '+')}`;
		return fetch(`${apis.SEARCH_RESULTS}?${qs}`)
			.then(response => response.json())
			.then(json => {
				let list = [];
				try{
					list = json.data.data;
				} catch(e){}
				if (!Array.isArray(list)) {
					list = [];
				}
				dispatch(receiveResultAction({ list }));
			});
	};
};