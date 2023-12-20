import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const hotel = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          style={{ padding: 5 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 14,
            gap: 10,
          }}
        >
          <SimpleLineIcons name="camera" size={24} color="black" />
          <Ionicons name="bookmark-outline" size={24} color="black" />
          <MaterialCommunityIcons
            name="share-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 12,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{params?.name}</Text>
        <Text
          style={{
            marginTop: 5,
            color: 'gray',
            fontWeight: '500',
            fontSize: 15,
          }}
        >
          {' '}
          North Indian * Fast Food * 160 for one
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#006A4E',
              borderRadius: 4,
              paddingHorizontal: 4,
              paddingVertifcal: 5,
            }}
          >
            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
              {params?.aggregrate_rating}
            </Text>
            <Ionicons name="ios-star" size={15} color="black" />
          </View>
        </View>
        <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 5 }}>
          3.2k Ratings
        </Text>
      </View>
    </ScrollView>
  );
};

export default hotel;

const styles = StyleSheet.create({});
