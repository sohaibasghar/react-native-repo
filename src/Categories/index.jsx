import React, { useEffect, useState } from 'react';
import Accordion from '../components/Accordion';
import AddCategoryModal from '../components/AddModal';
import { Button } from 'react-native-paper';
import { Alert, StyleSheet, View } from 'react-native';
import { axiosInstance } from '../Home';

const Categories = ({ navigation }) => {
	const [isAddModalVisible, setAddModalVisible] = useState(false);
	const [categories, setCategories] = useState({});

	const getAllCategories = async () => {
		const formData = new FormData();
		formData.append('category_type', 'category');
		return await axiosInstance.post('/getAllCategories', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	};

	useEffect(() => {
		const getData = async () => {
			const response = await getAllCategories();
			setCategories(response.data.data);
		};
		getData();
	}, []);

	const toggleAddModal = () => {
		setAddModalVisible(!isAddModalVisible);
	};

	const addCategory = async (category) => {
		const data = {
			name: category
		};
		try {
			const response = await axiosInstance.post('/categories', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			Alert.alert('Category added successfully');
			console.log('Response:', response.data);
		} catch (error) {
			console.error('Error submitting form data:', error);
		}
	};

	return (
		<>
			<View style={styles.container}>
				<Button style={styles.btn} mode='contained' onPress={toggleAddModal}>
					Add New Category
				</Button>
			</View>
			<AddCategoryModal
				title={'Add Category'}
				visible={isAddModalVisible}
				onClose={toggleAddModal}
				addData={addCategory}
			/>
			<Accordion data={categories} />
		</>
	);
};

export default Categories;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		paddingVertical: 10
	},
	btn: {
		width: 200
	}
});
