/**
 * create: 2017-6-16 11:25:16
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: store
 */

import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const logger = createLogger();

let store = createStore(
	reducers,
	{},
	compose(
		applyMiddleware(thunkMiddleware, logger),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

export default store;