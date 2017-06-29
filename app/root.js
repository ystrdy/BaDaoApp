/**
 * create: 2017-6-16 11:25:16
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 入口文件
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './app'
import store from './store'

export default class RootApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}