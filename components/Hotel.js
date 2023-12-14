import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';

const Hotel = ({ item }) => {
  return (
    <Pressable
      style={{
        marginHorizontal: 6,
        marginVertical: 12,
        borderRadius: 20,
        backgroundColor: 'white',
      }}
    >
      <Image
        style={{
          width: '100%',
          aspectRatio: 6 / 4,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={{ uri: item?.featured_image }}
      />
      <View>
        <View>
          <Text>{item?.name}</Text>
          <Text>{item?.description}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Hotel;

const styles = StyleSheet.create({});
