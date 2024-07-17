import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DiscoverVideo = ({vid1,vid2,vid3}) => {
  return (
    <View style={{flexDirection:"row"}}>
      <Image source={vid1}/>
      <Image source={vid2}/>
      <Image source={vid3}/>
    </View>
  )
}

export default DiscoverVideo

const styles = StyleSheet.create({})