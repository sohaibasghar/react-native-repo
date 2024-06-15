import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const CustomDataTable = ({ data }) => {
	return (
		<ScrollView horizontal>
			<DataTable>
				<DataTable.Header>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Name
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Material/Labour
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 150 }}>
						Trade
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Amount
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Date Paid
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Payee
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						File
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Receipt
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Pdf
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Status
					</DataTable.Title>
					<DataTable.Title textStyle={{ textTransform: 'capitalize' }} style={{ width: 100 }}>
						Payment
					</DataTable.Title>
				</DataTable.Header>
				<ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
					<View style={styles.container}>
						{data?.map((item, index) => (
							<DataTable.Row key={index}>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.name}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.material}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 150 }]}>
									{item.category.name}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.amount}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.date_paid}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.vendor.name}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.files}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.receipt}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.pdf}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.status}
								</DataTable.Cell>
								<DataTable.Cell style={[styles.dataCell, { width: 100 }]}>
									{item.payment}
								</DataTable.Cell>
							</DataTable.Row>
						))}
					</View>
				</ScrollView>
			</DataTable>
		</ScrollView>
	);
};

export default CustomDataTable;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		paddingBottom: 50
	},
	headerCell: {
		fontWeight: 'bold',
		textTransform: 'capitalize'
	},
	dataCell: {
		alignItems: 'flex-start'
	},
	scrollView: {
		flex: 1
	},
	container: {
		flex: 1,
		padding: 10
	},
	dataCell: {
		padding: 5
	}
});
