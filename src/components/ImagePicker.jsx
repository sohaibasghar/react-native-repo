import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = ({ title, selectImage, selectedImage }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.input} onPress={selectImage}>
				<Text style={styles.inputText}>{title}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={selectImage}>
				{selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		height: 40,
		width: '100%',
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		justifyContent: 'center',
		paddingLeft: 10,
		backgroundColor: '#fff',
		marginBottom: 10
	},
	inputText: {
		color: '#888'
	},
	image: {
		width: 200,
		height: 200,
		marginVertical: 20
	}
});

export default ImagePicker;
