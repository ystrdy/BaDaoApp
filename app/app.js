/**
 * create: 2017-6-16 11:25:16
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: APP
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar
} from 'react-native';
import Navigators from './navigators';
import Realm from 'realm';
import SchemaArray from './common/schema';

// 数据库
global.realm = new Realm({
	schema : SchemaArray
});

class App extends Component {
	render(){
		return (
			<View style={ style.container }>
				<StatusBar 
					animated={ true }
					backgroundColor={ '#0FADF4' }
					showHideTransition={ 'slide' }/>
				<Navigators />
			</View>
		);
	}
}

const style = StyleSheet.create({
	container : {
		flex : 1
	}
});

export default App;

/*
import React, { Component } from 'react'
import {
	View,
	Text,
	StatusBar
} from 'react-native'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const {
			dispatch
		} = this.props;
		console.log(dispatch);
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<StatusBar
					animated={true}
					backgroundColor={'#f00'}
					translucent={true}/>
				<View style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Text>Demo</Text>
				</View>
			</View>
		);
	}
}

function mapStateToProps(store){
	const { persionBookshelf } = store;
	return {
		persionBookshelf
	};
};

export default connect(mapStateToProps)(App);

*/