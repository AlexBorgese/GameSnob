import React from 'react';
import Proptypes from 'prop-types';
import { Text } from 'react-native';

const Title = ({ title }) => (
	<Text>
		{ title }
	</Text>
);

Title.propTypes = {
	title: Proptypes.string
}

export default Title;
