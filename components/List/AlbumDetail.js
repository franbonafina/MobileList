import React from 'react';
import { Text, Image, View, StyleSheet, Linking } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => (
	<Card>	
		<CardSection/>
		<CardSection>
			<Image style={styles.albumCover} source={{ uri: album.image }} />
		</CardSection>

		<CardSection>
			<Button onPress={() => navigate{'PhotoList', {album.photos}>{album.title}</Button>
		</CardSection>
	</Card>
);

const styles = StyleSheet.create({
	albumCover: {
		height: 300,
		width: null,
		flex: 1,
	},
});

export default AlbumDetail;
