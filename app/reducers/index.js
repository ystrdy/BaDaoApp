/**
 * create: 2017-6-16 11:25:16
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: reducers
 */

import { combineReducers } from 'redux';
import search from './search';
import detail from './detail';

const reducers = combineReducers({
	search,
	detail
});

export default reducers;