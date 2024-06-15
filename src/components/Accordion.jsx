import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import CustomDataTable from './DataTable';

const Accordion = ({ data }) => (
	<ScrollView style={{ flex: 1 }}>
		<List.AccordionGroup>
			{Object.entries(data)?.map(([trade, transactions], index) => (
				<List.Accordion key={index} title={trade} id={index}>
					<ScrollView pagingEnabled>
						{transactions.length ? (
							<CustomDataTable data={transactions} />
						) : (
							<View style={{ padding: 20 }}>
								<Text>No data available</Text>
							</View>
						)}
					</ScrollView>
				</List.Accordion>
			))}
		</List.AccordionGroup>
	</ScrollView>
);

export default Accordion;
