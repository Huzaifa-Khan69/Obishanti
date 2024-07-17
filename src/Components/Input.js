import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({placeholder,inputStyle}) => {
  return (
    <TextInput
    placeholderTextColor={"#7A7A7A"}
      placeholder={placeholder}
      style={[{
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#E9E9E9',
        paddingLeft:15,
        fontSize:15,
        marginVertical:12
      },inputStyle]}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});
