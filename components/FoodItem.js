import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FoodItem = ({ item }) => {
  const data = [item];
  return (
    <View>
      {data?.map((item, index) => (
        <Pressable key={index}>
          <Text>
            {item?.name} ({item?.items?.length}){' '}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
