import React from 'react';
import Proptypes from 'prop-types';
import { Text } from 'react-native';

const Title = ({ title, style }) => (
	<Text style={ style }>
		{ title }
	</Text>
);

Title.propTypes = {
	title: Proptypes.string,
	style: Proptypes.object
}

export default Title;
