import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import images from '../assets/images';
import color from '../Theme/color';
import {useSelector} from 'react-redux';

const BottomTab = ({
  homeOnPress,
  discoverOnPress,
  createOnPress,
  reelsOnPress,
  accountOnPress,
}) => {
   const {option} = useSelector(store => store.Data.option);
  
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
        onPress={homeOnPress}
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={images.home}
          style={{
            width: 30,
            height: 30,
            tintColor: option === 0 ? color.purple : 'black',
          }}
        />
        <Text style={{color: option === 0? color.purple : 'black'}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={discoverOnPress}
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Entypo
          name={'compass'}
          size={28}
          color={option === 1 ? color.purple : 'black'}
        />
        <Text style={{color: option === 1 ? color.purple : 'black'}}>
          Discover
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={createOnPress}
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Feather name={'plus-square'} size={28} color={'black'} />
        <Text style={{color: 'black'}}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={reelsOnPress}
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={images.reel} style={{width: 28, height: 28, tintColor: option === 4 ? color.purple : 'black',}} />
        <Text style={{color: option === 4 ? color.purple : 'black'}}>Reels</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={accountOnPress}
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={images.user} style={{width: 30, height: 30}} />
        <Text style={{color: option === 5 ? color.purple : 'black'}}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
