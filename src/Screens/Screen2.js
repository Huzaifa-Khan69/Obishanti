import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Screen2 = ({navigation}) => {
  return (
    <View>
      <Image source={images.background} style={{position: 'absolute'}} />
      <Image source={images.side1} style={{position:"absolute",marginTop:20,marginLeft:210}}/>
      <Image source={images.side2} style={{position:"absolute",marginTop:450,}}/>
      <Text style={{color: 'white', fontSize: 35, margin: 30,fontWeight:"bold"}}>
        All You Need Is Love And A Dog
      </Text>
      <Text style={{color: 'white', fontSize: 18, marginHorizontal: 20}}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </Text>
      <Image
        source={images.dog2}
        style={{alignSelf: 'center', marginVertical: 30}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 7.5,
            backgroundColor: 'white',
          }}
        />
        <View
          style={{
            width: 18,
            height: 10,
            borderRadius: 7.5,
            backgroundColor: '#9BEDFF',
            marginHorizontal: 8,
          }}
        />
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 7.5,
            backgroundColor: 'white',
          }}
        />
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Screen3")}
        style={{
          width: 50,
          height: 50,
          borderRadius: 30,
          backgroundColor: '#9BEDFF',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <AntDesign name={'arrowright'} size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
