import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import color from '../Theme/color';

const Chat = ({img, name, sendername, message, time, sender,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        flexDirection: 'row',
        left: 5,
        // marginVertical: 8,
        alignItems: 'center',
        padding: 10,
      }}>
      <Image source={img} style={{width: 50, height: 50}} />
      <View style={{left: 10, width: '55%'}}>
        <Text style={{color: 'black', fontSize: 18}}>{name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontSize: 15}}>{sendername}:</Text>
          <Text style={{color: 'black', fontSize: 15}}>{message}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '28%',
        }}>
        <Text style={{color: 'black', fontSize: 16}}>{time}</Text>
        {sender === 'other' ? (
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 25,
              backgroundColor: color.purple,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15}}>2</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Chat;

const styles = StyleSheet.create({});
