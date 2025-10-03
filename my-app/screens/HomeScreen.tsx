import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import DishFormModal from './DishFormModal';
import DishList from './DishList';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const courses = ['Starters', 'Mains', 'Desserts'];
  const [menu, setMenu] = React.useState<any[]>([]);

  const handleSubmit = (dish: any) => {
    setMenu(prev => [...prev, dish]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 16 }}>
        <Button mode="contained" onPress={() => setModalVisible(true)}>
          Add Dish
        </Button>
      </View>

      {/* Subcomponent handles display */}
      <DishList courses={courses} menu={menu} />

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
