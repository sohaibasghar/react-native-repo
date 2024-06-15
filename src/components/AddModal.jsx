import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Modal, Portal, Button, TextInput } from 'react-native-paper';

const AddModal = ({ visible, onClose, title, addData }) => {
	const [name, setName] = useState('');

	const handleChange = (value) => {
		setName(value);
	};

	const handleSubmit = () => {
		console.log(name);
		addData(name);
		onClose();
	};

	return (
		<Portal>
			<Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modal}>
				<ScrollView>
					<TextInput
						label='Name'
						value={name}
						onChangeText={(text) => handleChange(text)}
						style={styles.input}
					/>
					<Button mode='contained' onPress={handleSubmit} style={styles.button}>
						{title}
					</Button>
				</ScrollView>
			</Modal>
		</Portal>
	);
};

const styles = StyleSheet.create({
	modal: {
		backgroundColor: 'white',
		padding: 20,
		margin: 20,
		borderRadius: 10
	},
	input: {
		marginBottom: 10
	},
	button: {
		marginTop: 20
	}
});

export default AddModal;
