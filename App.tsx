/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Home from './src/Home';
import Categories from './src/Categories';
import { PaperProvider } from 'react-native-paper';
import Material from './src/Material';
import Vendor from './src/Vendor';

function App(): JSX.Element {
	const Stack = createNativeStackNavigator();

	return (
		<PaperProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name='Total' component={Home} options={{ headerShown: false }} />
						<Stack.Screen name='Categories' component={Categories} />
						<Stack.Screen name='Material' component={Material} />
						<Stack.Screen name='Vendor' component={Vendor} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</PaperProvider>
	);
}

export default App;
