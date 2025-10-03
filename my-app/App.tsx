import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import { ScrollView } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ScrollView>
    </PaperProvider>
  );
}

