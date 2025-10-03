import * as React from 'react';
import { View, Text } from 'react-native';
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
      {/* Header row with count + add button */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text>Total items: {menu.length}</Text>
        <Button mode="contained" onPress={() => setModalVisible(true)}>
          Add Dish
        </Button>
      </View>

      {/* List */}
      <DishList courses={courses} menu={menu} />

      {/* Modal */}
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
