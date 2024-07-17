import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../Theme/color';

const Button = ({text, buttonStyle, icon,textStyle,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        {
          width: '90%',
          height: 60,
          borderRadius: 10,
          backgroundColor: color.blue,
          alignItems: 'center',
          justifyContent: 'center',
        },
        buttonStyle,
      ]}>
      {icon ? icon : null}
      <Text style={[{color: 'black', fontSize: 18},textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
