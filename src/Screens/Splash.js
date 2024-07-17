import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import images from '../assets/images'

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Splash2');
    }, 1000); // Adjust the delay time in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View>
      <Image source={images.background}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})