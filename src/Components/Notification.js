import {_Text, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../Theme/color';

const Notification = ({img, text,read,onPress,}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        left: 5,
        // marginVertical: 8,
        width: '100%',
        backgroundColor: '#FBF8FE',
        padding: 8,
      }}>
      <Image source={img} style={{width: 50, height: 50}} />
      <Text style={{color: 'black', fontSize: 15, left: 8, width: '74%'}}>
        {text}
      </Text>
      {read?null:<View
        style={{
          width: 12,
          height: 12,
          borderRadius: 20,
          backgroundColor: color.purple,
        }}
      />}
      
    </TouchableOpacity>
  );
};

export default Notification;

const styles = StyleSheet.create({});
