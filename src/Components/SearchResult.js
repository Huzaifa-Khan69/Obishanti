import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchResult = ({img,name,username}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        left: 10,
        marginVertical: 5,
      }}>
      <Image source={img} style={{width: 50, height: 50}} />
      <View style={{left:10,width:"72%"}}>
        <Text style={{color: 'black', fontSize: 18}}>{username}</Text>
        <Text style={{color: 'black', fontSize: 15}}>{name}</Text>
      </View>
      <TouchableOpacity>
        <Entypo name={'cross'} size={20} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({});
