import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import AddModal from '../components/AddExpenseModal';
import BottomModal from '../components/BottomModal';
import CustomDataTable from '../components/DataTable';
import axios from 'axios';
import { Button } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

export const axiosInstance = axios.create({
	baseURL: 'https://rn-api.devtechx.com/api'
});
const initialState = {
	vendor_id: 1,
	category_id: 1,
	name: '',
	material: '',
	amount: '',
	date_paid: '',
	files: null,
	receipt: null,
	status: '',
	payment: '',
	pdf: null
};
const Home = ({ navigation }) => {
	const [form, setForm] = useState(initialState);
	const [isAddModalVisible, setAddModalVisible] = useState(false);
	const [isBottomModalVisible, setBottomModalVisible] = useState(false);
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [refetchTrigger, setRefetchTrigger] = useState(false);
	const [categories, setCategories] = useState([]);
	const [vendors, setVendors] = useState([]);
	const [addExpenseLoading, setAddExpenseLoading] = useState(false);

	const toggleAddModal = () => {
		setAddModalVisible(!isAddModalVisible);
	};

	const toggleBottomModal = () => {
		setBottomModalVisible(!isBottomModalVisible);
	};

	const fetchExpenseData = async () => {
		try {
			const response = await axios({
				url: 'https://rn-api.devtechx.com/api/expenses',
				method: 'get',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			return response.data;
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const fetchCategories = async () => {
		try {
			const response = await axios({
				url: 'https://rn-api.devtechx.com/api/categories',
				method: 'get',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			return response.data.data;
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const fetchVendors = async () => {
		try {
			const response = await axios({
				url: 'https://rn-api.devtechx.com/api/vendors',
				method: 'get',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			return response.data.data;
		} catch (error) {
			console.log(error);
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const loadData = async () => {
			const fetchedData = await fetchExpenseData();
			setData(fetchedData);
		};

		loadData();
	}, [refetchTrigger]);

	useFocusEffect(
		useCallback(() => {
			const loadCategories = async () => {
				const fetchedCategories = await fetchCategories();
				const categories = fetchedCategories?.map((category) => {
					return {
						label: category.name,
						value: category.id
					};
				});
				setCategories(categories);
				console.log('Fetching categories');
			};

			loadCategories();
		}, [])
	);

	useFocusEffect(
		useCallback(() => {
			const loadVendors = async () => {
				const fetchedVendors = await fetchVendors();
				const vendors = fetchedVendors?.map((category) => {
					return {
						label: category.name,
						value: category.id
					};
				});
				setVendors(vendors);
			};

			loadVendors();
		}, [])
	);

	const addExpense = async (formData) => {
		setAddExpenseLoading(true);
		try {
			const response = await axiosInstance.post('/expenses', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});
			Alert.alert('Successfully Added');
			toggleAddModal();
			setForm(initialState);
			setAddExpenseLoading(false);
			setRefetchTrigger(true);
		} catch (error) {
			console.error('Error submitting form data:', error);
			setLoading(false);
			setAddExpenseLoading(false);
		}
	};
	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size='large' />
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.container}>
				<Text>Error fetching data: {error.message}</Text>
			</View>
		);
	}

	return (
		<View style={{ flex: 1, marginTop: 10 }}>
			<View style={styles.buttonsContainer}>
				<Text style={{ marginVertical: 10, fontWeight: 600 }}>
					Total Expense:{' '}
					{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
						data.total_cost
					)}
				</Text>
				<Button style={styles.btn} mode='contained' onPress={toggleAddModal}>
					Add Expense
				</Button>
				<Button style={styles.btn} mode='contained' onPress={toggleBottomModal}>
					Filter
				</Button>
			</View>
			<CustomDataTable data={data?.data} />

			<AddModal
				handleAddExpense={addExpense}
				visible={isAddModalVisible}
				onClose={toggleAddModal}
				form={form}
				setForm={setForm}
				categories={categories}
				vendors={vendors}
				addExpenseLoading={addExpenseLoading}
			/>

			<BottomModal
				navigation={navigation}
				visible={isBottomModalVisible}
				onClose={toggleBottomModal}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingTop: 20
	},
	buttonsContainer: {
		flexDirection: 'column',
		gap: 5,
		marginBottom: 10,
		alignItems: 'center'
	},
	btn: {
		width: 200
	}
});

export default Home;
