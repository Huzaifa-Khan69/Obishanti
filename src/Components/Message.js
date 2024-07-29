import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../Theme/color';

const Message = ({message, time, img,from}) => {
  return (
    from==="me"?(
    <View
      style={{
        backgroundColor: color.purple,
        width: '90%',
        borderRadius: 20,
        padding: 10,
        alignSelf:"flex-end",margin:5
      }}>
      <Text style={{color: 'white'}}>{message}</Text>
      <Text style={{color: 'white',paddingTop:5}}>{time}</Text>
    </View>):(
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
        marginVertical: 10,
        alignSelf: 'flex-start',
        left:5
      }}>
      <Image source={img} style={{width: 40, height: 40, marginTop: 20}} />
      <View
        style={{
          width: '90%',
          backgroundColor: 'white',
          borderRadius: 20,
          justifyContent: 'center',
          padding: 10,
        }}>
        <Text style={{color: 'black'}}>{message}</Text>
        <Text style={{color: 'black', paddingTop: 5}}>{time}</Text>
      </View>
    </View>)
  );
};

export default Message;

const styles = StyleSheet.create({});
