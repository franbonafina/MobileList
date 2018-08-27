import React from 'react';
import { Text, Image, View, StyleSheet, Linking } from 'react-native';
import {Card, CardSection, Button} from './common';


const ListDetail = ({ library }) => (
	<Card>
	<CardSection>
			<View style={styles.thumbnailContainer}>
				<Image style={styles.thumbnail} source={{ uri: library.image }} />
			</View>
			<View style={styles.content}>
				<Text style={styles.contentHeader}>{library.title}</Text>
				<Text>{library.artist}</Text>
			</View>
		</CardSection>
		
		<CardSection>
			<Button onPress={() => Linking.openURL(library.url)}></Button>
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

export default ListDetail;
