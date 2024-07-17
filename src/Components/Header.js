import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../Theme/color';

const Header = ({icon, text,headerStyle,textStyle}) => {
  return (
    <View
      style={[{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        height: 60,
      },headerStyle]}>
      {icon ? icon : null}
      <Text style={[{color: color.purple, fontSize: 25},textStyle]}>{text}</Text>
      <View />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
