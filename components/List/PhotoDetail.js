import React from 'react';
import { Text, Image, View, StyleSheet, Linking } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const PhotoDetail = ({ photo }) => (
	<Card>
		<CardSection>
			<View style={styles.thumbnailContainer}>
				<Image style={styles.thumbnail} source={{ uri: photo.thumbnail_image }} />
			</View>
			<View style={styles.content}>
				<Text style={styles.contentHeader}>{photo.title}</Text>
				<Text>{photo.artist}</Text>
			</View>
		</CardSection>		
	</Card>
);

const styles = StyleSheet.create({
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 2,
		marginRight: 7,
	},
	thumbnail: {
		width: 50,
		height: 50,
	},
	contentHeader: {
		fontSize: 16,
		fontWeight: '600',
	},
	content: {
		flexDirection: 'column',
		justifyContent: 'space-around',
	},	
});

export default PhotoDetail;
