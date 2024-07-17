import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../Theme/color';

const Header2 = ({title, icon1, icon2}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
      }}>
      <Text style={{color: color.purple, fontSize: 30}}>{title}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '25%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: color.purple,
            borderRadius: 20,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {icon1 ? icon1 : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            left: 10,
            borderWidth: 2,
            borderColor: color.purple,
            borderRadius: 20,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {icon2 ? icon2 : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({});
