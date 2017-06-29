/**
 * create: 2017-6-22 11:24:02
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 搜索页的reducers
 */

import * as types from '../common/actionTypes';
import { handleActions } from 'redux-actions';

const search = handleActions({
	// 首页
	[types.REQUEST_HOME] 		: (state, action) => ({ ...state, home: { loaded: false } }),
	[types.RECEIVE_HOME] 		: (state, action) => ({ ...state, home: { ...action.payload, loaded: true } }),
	[types.RECEIVE_HISTORY] 	: (state, action) => ({ ...state, home: { ...state.home, history: action.payload } }),
	// 结果页
	[types.REQUEST_RESULT] 		: (state, action) => ({ ...state, result: { loaded: false } }),
	[types.RECEIVE_RESULT] 		: (state, action) => ({ ...state, result: { ...action.payload, loaded: true } })
}, {
	home	: { loaded: false },
	result	: { loaded: false }
});

export default search;