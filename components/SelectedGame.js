import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import getCoverImage from '../service/getCoverImage';
import getGames from '../service/getGames'; // TODO extract all api methods into one file, this is dirty

import Title from './Title';

class SelectedGame extends Component {
	constructor() {
		super();
		this.state = { imageSrc: '', game: null };
	}

	componentDidMount() {
		let game;

		getGames().
			then(res => {
				game = res[0];
				getCoverImage(res[0].cover).
				then(res => {
					this.setState({
						imageSrc: res[0].url.substr(2),
						game
					});
				});
			});
	}

	render() {
		const { game, imageSrc } = this.state;
		console.log(game);
		return(
			<View style={{ flex: 1 }}>
				<Title title={ game && game.name } />
				<Image source={{ uri: `https://${imageSrc}` }} style={{ width: 50, height: 50 }}/>
				<Text>
					{game &&  game.summary }
				</Text>
			</View>
		);
	}
}

SelectedGame.propTypes = {
	data: Proptypes.object
}

export default SelectedGame;
