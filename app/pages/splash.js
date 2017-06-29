/**
 * create: 2017-6-16 18:05:27
 * author: xuxufei
 * e-mail: xuxufei@2144.cn
 * description: 启动画面
 */

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	StatusBar,
	TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation';

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count : 3
		};
	}
	componentDidMount() {
		this._count(() => {
			this._navigateHome();
		});
	}
	render(){
		return (
			<View style={ style.container }>
				<StatusBar hidden={ true }/>
				<View style={ style.timerPosition }>
					<TouchableHighlight
						style={ style.timerFlex }
						activeOpacity={ 0.5 }
						underlayColor={ 'rgba(230, 194, 59, 1)' }
						onPress={ this._onClickTimer.bind(this) }>
						<Text style={ style.timer }>跳过 { this.state.count }s</Text>
					</TouchableHighlight>
				</View>
				<Image style={ style.logo } source={ require('../images/logo.png') } />
			</View>
		);
	}
	_navigateHome(){
		/*
		this.props.navigation.dispatch({
	        type: 'Navigation/RESET',
	        index: 0,
	        actions: [{ type: 'Navigate', routeName: 'Home' }]
		})
		*/
		/*
		this.props.navigation.navigate('Home');
		*/
		const resetAction = NavigationActions.reset({
			index : 0,
			actions : [
				NavigationActions.navigate({ routeName: 'Home' })
			]
		});
		this.props.navigation.dispatch(resetAction);
	}
	_onClickTimer(){
		clearTimeout(this.tID);
		this._navigateHome();
	}
	_count(callback){
		const handle = () => {
			let count = this.state.count;
			this.setState({
				count : --count
			});
			if (count) {
				this.tID = setTimeout(handle, 1000);
			} else {
				callback();
			}
		};
		this.tID = setTimeout(handle, 1000);
	}
}

const style = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#fff'
	},
	timerPosition : {
		position : 'absolute',
		right : 10,
		top : 10,
		width : 80,
		height : 30,
		overflow : 'hidden'
	},
	timerFlex : {
		borderRadius : 4,
		backgroundColor : 'rgba(230, 194, 59, 0.75)',
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
	timer : {
		color : '#fff'
	},
	logo : {
		width : 100,
		height : 100
	}
});

export default Splash;