import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import images from '../assets/images';
import color from '../Theme/color';

const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 60,
        paddingHorizontal: 10,
        bottom: 0,
      }}>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={images.home}
          style={{width: 30, height: 30, tintColor: color.purple}}
        />
        <Text style={{color: color.purple}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Entypo name={'compass'} size={28} color={'black'} />
        <Text style={{color: 'black'}}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Feather name={'plus-square'} size={28} color={'black'} />
        <Text style={{color: 'black'}}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={images.reel} style={{width: 28, height: 28}} />
        <Text style={{color: 'black'}}>Reels</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={images.user} style={{width: 30, height: 30}} />
        <Text style={{color: 'black'}}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
