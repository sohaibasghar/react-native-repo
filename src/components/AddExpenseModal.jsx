import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Modal, Portal, Button, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from './ImagePicker';

const AddExpenseModal = ({
	visible,
	onClose,
	handleAddExpense,
	form,
	setForm,
	categories,
	vendors,
	addExpenseLoading
}) => {
	const selectImage = (name) => {
		const options = {
			mediaType: 'photo',
			quality: 1
		};

		launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.errorCode) {
				console.log('ImagePicker Error: ', response.errorMessage);
			} else if (response.assets && response.assets.length > 0) {
				const { uri } = response.assets[0];
				handleChange(name, uri);
			}
		});
	};

	const handleChange = (name, value) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async () => {
		const formData = new FormData();

		Object.keys(form).forEach((key) => {
			if (key === 'files' || key === 'receipt' || key === 'pdf') {
				if (form[key]) {
					const uri = form[key];
					const filename = uri.substring(uri.lastIndexOf('/') + 1);
					const match = /\.(\w+)$/.exec(filename);
					const type = match ? `image/${match[1]}` : `image`;
					formData.append(key, {
						uri,
						name: filename,
						type
					});
				}
			} else {
				formData.append(key, form[key]);
			}
		});
		console.log(formData);
		handleAddExpense(formData);
	};
	return (
		<Portal>
			<Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modal}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<TextInput
						label='Name'
						value={form.name}
						onChangeText={(text) => handleChange('name', text)}
						style={styles.input}
					/>
					<RNPickerSelect
						onValueChange={(value) => handleChange('material', value)}
						items={[
							{ label: 'Material ', value: 'material' },
							{ label: 'Labour', value: 'labour' }
						]}
						placeholder={{ label: 'Select Material', value: null }}
						style={pickerSelectStyles}
					/>
					<RNPickerSelect
						onValueChange={(value) => handleChange('category_id', value)}
						items={categories}
						placeholder={{ label: 'Select Trade', value: null }}
						style={pickerSelectStyles}
					/>
					<TextInput
						label='Amount'
						value={form.amount}
						onChangeText={(text) => handleChange('amount', text)}
						keyboardType='numeric'
						style={styles.input}
					/>
					<TextInput
						label='Date Paid'
						value={form.date_paid}
						onChangeText={(text) => handleChange('date_paid', text)}
						style={styles.input}
						placeholder='YYYY-MM-DD'
					/>
					<RNPickerSelect
						onValueChange={(value) => handleChange('vendor_id', value)}
						items={vendors}
						placeholder={{ label: 'Select Payee', value: null }}
						style={pickerSelectStyles}
					/>
					<ImagePicker
						title='Select File'
						selectImage={() => {
							selectImage('files');
						}}
						selectedImage={form.files}
					/>
					<ImagePicker
						title='Select Receipt'
						selectImage={() => {
							selectImage('receipt');
						}}
						selectedImage={form.receipt}
					/>
					<ImagePicker
						title='Select Pdf'
						selectImage={() => {
							selectImage('pdf');
						}}
						selectedImage={form.pdf}
					/>
					<RNPickerSelect
						onValueChange={(value) => handleChange('status', value)}
						items={[
							{ label: 'Pending', value: 'pending' },
							{ label: 'Approved', value: 'approved' },
							{ label: 'Rejected', value: 'rejected' }
						]}
						placeholder={{ label: 'Select Status', value: null }}
						style={pickerSelectStyles}
					/>
					<RNPickerSelect
						onValueChange={(value) => handleChange('payment', value)}
						items={[
							{ label: 'Credit Card', value: 'credit_card' },
							{ label: 'Cash', value: 'cash' },
							{ label: 'Bank Transfer', value: 'bank_transfer' }
						]}
						placeholder={{ label: 'Select Payment Method', value: null }}
						style={pickerSelectStyles}
					/>
					<Button
						disabled={addExpenseLoading}
						loading={addExpenseLoading}
						mode='contained'
						onPress={handleSubmit}
						style={styles.button}
					>
						Add Expense
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

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		paddingRight: 30,
		marginBottom: 10
	},
	inputAndroid: {
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: 'purple',
		borderRadius: 8,
		color: 'black',
		paddingRight: 30,
		marginBottom: 10
	}
});

export default AddExpenseModal;
