import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, TextInput, Menu } from 'react-native-paper';

type DishFormModalProps = {
  visible: boolean;
  title: string;
  saveLabel?: string;
  onDismiss: () => void;
  onSubmit: (dish: { name: string; description: string; course: number | null; price: number }) => void;
};

export default function DishFormModal({
  visible,
  title,
  saveLabel = 'Save',
  onDismiss,
  onSubmit,
}: DishFormModalProps) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [course, setCourse] = React.useState<number | null>(null);
  const [price, setPrice] = React.useState('');

  const [menuVisible, setMenuVisible] = React.useState(false);
  const courses = ['Starter', 'Main', 'Dessert'];

  const resetForm = () => {
    setName('');
    setDescription('');
    setCourse(null);
    setPrice('');
  };

  const handleDismiss = () => {
    resetForm();
    onDismiss();
  };

  const handleSave = () => {
    const dish = {
      name,
      description,
      course,
      price: parseFloat(price),
    };
    onSubmit(dish);
    resetForm();
    onDismiss();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={handleDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Dish Name"
            value={name}
            onChangeText={setName}
            style={{ marginBottom: 12 }}
          />
          <TextInput
            label="Description"
            value={description}
            onChangeText={setDescription}
            multiline
            style={{ marginBottom: 12 }}
          />

          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <Button
                mode="outlined"
                onPress={() => setMenuVisible(true)}
                style={{ marginBottom: 12 }}
              >
                {course !== null ? courses[course] : 'Select Course'}
              </Button>
            }
          >
            {courses.map((c, idx) => (
              <Menu.Item
                key={idx}
                onPress={() => {
                  setCourse(idx);
                  setMenuVisible(false);
                }}
                title={c}
              />
            ))}
          </Menu>

          <TextInput
            label="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleDismiss}>Cancel</Button>
          <Button onPress={handleSave}>{saveLabel}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
