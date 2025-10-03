import * as React from 'react';
import { View, Text } from 'react-native';

type Dish = {
  name: string;
  description: string;
  course: number;
  price: number;
};

type DishListProps = {
  courses: string[];
  menu: Dish[];
};

export default function DishList({ courses, menu }: DishListProps) {
  // computed grouping
  const grouped = React.useMemo(() => {
    return courses.map((courseName, idx) => ({
      course: courseName,
      items: menu.filter(d => d.course === idx),
    }));
  }, [courses, menu]);

  return (
    <View style={{ padding: 16 }}>
      <Text selectable style={{ fontFamily: 'monospace' }}>
        {JSON.stringify(grouped, null, 2)}
      </Text>
    </View>
  );
}
