/**
 * create: 2017-6-23 17:48:16
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 详情页的reducers
 */

import * as types from '../common/actionTypes';
import { handleActions } from 'redux-actions';

const detail = handleActions({
	[types.REQUEST_DETAIL] : (state, action) => ({ ...state, [action.payload.id] : {...action.payload, loaded: false}}),
	[types.RECEIVE_DETAIL] : (state, action) => ({ ...state, [action.payload.id] : {...action.payload, loaded: true}}),
	[types.RECEIVE_FAVOURITE_BOOK] : (state, action) => ({ ...state, [action.payload] : { ...state[action.payload], fav: true}}),
	[types.RECEIVE_UNFAVOURITE_BOOK] : (state, action) => ({ ...state, [action.payload] : { ...state[action.payload], fav: false}})
}, {});

export default detail;