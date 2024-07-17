import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Stories = ({img, icon}) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {img}
      {icon?icon:null}
    </TouchableOpacity>
  );
};

export default Stories;

const styles = StyleSheet.create({});
