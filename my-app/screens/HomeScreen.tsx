import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import DishFormModal from './DishFormModal';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleSubmit = (dish: any) => {
    console.log('Submitted Dish:', dish);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button mode="contained" onPress={() => setModalVisible(true)}>
          Add Dish
        </Button>
      </View>

      <DishFormModal
        visible={modalVisible}
        title="Add Dish"
        saveLabel="Create"
        onDismiss={() => setModalVisible(false)}
        onSubmit={handleSubmit}
      />
    </View>
  );
}
