import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import DishFormModal from './DishFormModal';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const courses = ['Starter', 'Main', 'Dessert'];

  // flat array instead of multidimensional
  const [menu, setMenu] = React.useState<Array<any>>([]);

  const handleSubmit = (dish: any) => {
    setMenu(prev => [...prev, dish]); // just append
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button mode="contained" onPress={() => setModalVisible(true)}>
          Add Dish
        </Button>
      </View>

      {/* raw object display */}
      <View style={{ marginTop: 20 }}>
        <Text selectable style={{ fontFamily: 'monospace' }}>
          {JSON.stringify(menu, null, 2)}
        </Text>
      </View>

      <DishFormModal
        visible={modalVisible}
        title="Add Dish"
        saveLabel="Add"
        courses={courses}
        onDismiss={() => setModalVisible(false)}
        onSubmit={handleSubmit}
      />
    </View>
  );
}
