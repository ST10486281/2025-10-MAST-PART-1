import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, TextInput, Menu, HelperText } from 'react-native-paper';

type Dish = {
  name: string;
  description: string;
  course: number;
  price: number;
};

type DishFormModalProps = {
  visible: boolean;
  title: string;
  saveLabel?: string;
  courses: string[];
  onDismiss: () => void;
  onSubmit: (dish: Dish) => void;
};

export default function DishFormModal({
  visible,
  title,
  saveLabel = 'Save',
  courses,
  onDismiss,
  onSubmit,
}: DishFormModalProps) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [course, setCourse] = React.useState<number | null>(null);
  const [price, setPrice] = React.useState('');
  const [priceError, setPriceError] = React.useState(false);

  const [menuVisible, setMenuVisible] = React.useState(false);

  const resetForm = () => {
    setName('');
    setDescription('');
    setCourse(null);
    setPrice('');
    setPriceError(false);
  };

  const handleDismiss = () => {
    resetForm();
    onDismiss();
  };

  const handleSave = () => {
    const parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice)) {
      setPriceError(true);
      return; // block save
    }

    if (course === null) return; // require course

    const dish: Dish = {
      name,
      description,
      course,
      price: parsedPrice,
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
            onChangeText={text => {
              setPrice(text);
              setPriceError(false);
            }}
            keyboardType="numeric"
            error={priceError}
          />
          {priceError && (
            <HelperText type="error" visible={priceError}>
              Price must be a number
            </HelperText>
          )}
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleDismiss}>Cancel</Button>
          <Button onPress={handleSave}>{saveLabel}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
