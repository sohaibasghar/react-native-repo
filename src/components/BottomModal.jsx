import * as React from 'react';
import { Modal, Portal, List, Divider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const BottomModal = ({ navigation, visible, onClose }) => {
	const handleClick = (screen) => {
		navigation.navigate(screen);
		onClose();
	};

	return (
		<Portal>
			<Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modal}>
				<View>
					<List.Item
						title='Total'
						onPress={() => {
							handleClick('Total');
						}}
					/>
					<Divider />
					<List.Item
						title='Material/Labour'
						onPress={() => {
							handleClick('Material');
						}}
					/>
					<Divider />
					<List.Item
						title='Categories'
						onPress={() => {
							handleClick('Categories');
						}}
					/>
					<Divider />
					<List.Item
						title='Vendors'
						onPress={() => {
							handleClick('Vendor');
						}}
					/>
				</View>
			</Modal>
		</Portal>
	);
};

export default BottomModal;

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
