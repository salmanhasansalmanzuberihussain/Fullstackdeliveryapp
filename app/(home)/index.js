import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location'; //expo-location
import * as LocationGeoCoding from 'expo-location';

const index = () => {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'fetching your location...'
  );

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  });

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Services not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();

    if (status !== granted) {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use the location service',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
  };

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
