import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button mode="contained" onPress={() => console.log('Add Dish')}>
          Add Dish
        </Button>
      </View>
    </View>
  );
}
