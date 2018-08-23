import React from 'react';
import { Text, Image, View, StyleSheet, Linking } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => (
	<Card>
		<CardSection>
			<View style={styles.thumbnailContainer}>
				<Image style={styles.thumbnail} source={{ uri: album.thumbnail_image }} />
			</View>
			<View style={styles.content}>
				<Text style={styles.contentHeader}>{album.title}</Text>
				<Text>{album.artist}</Text>
			</View>
		</CardSection>

		<CardSection>
			<Image style={styles.albumCover} source={{ uri: album.image }} />
		</CardSection>

		<CardSection>
			<Button onPress={() => Linking.openURL(album.url)}></Button>
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
	albumCover: {
		height: 300,
		width: null,
		flex: 1,
	},
});

export default AlbumDetail;
