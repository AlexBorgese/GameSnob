import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import getCoverImage from '../service/getCoverImage';
import getGames from '../service/getGames'; // TODO extract all api methods into one file, this is dirty

import Title from './Title';

class SelectedGame extends Component {
	constructor() {
		super();
		this.state = { imageSrc: '', games: null };
	}

	componentDidMount() {
		getGames().
		  then(res => {
			  this.setState({
				games: res[0] // maybe do image here
			  });
			  console.log('legittt?', this.state.games.cover);
			  getCoverImage(this.state.games.cover).
				then(res => {
				console.log('image!!!', res[0])
				this.setState({
					imageSrc: res[0].url.substr(2)
				});
				console.log(this.state.imageSrc)
			});
		  });


	  }

	render() {
		const { games, imageSrc } = this.state;

		return(
			<View style={{ flex: 1 }}>
				<Title title={ games && games.name } />
				<Image source={{ uri: `https://${imageSrc}` }} style={{ width: 50, height: 50 }}/>
				<Text>
					{games &&  games.summary }
				</Text>
			</View>
		);
	}
}

SelectedGame.propTypes = {
	data: Proptypes.object
}

export default SelectedGame;
