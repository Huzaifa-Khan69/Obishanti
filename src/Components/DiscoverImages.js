import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../assets/images';

const DiscoverImages = ({img1,img2,img3,bigimg,img4,img5,img6,ViewStyle}) => {
  return (
    <View>
    <View style={[{flexDirection: 'row'},ViewStyle]}>
      <View style={{alignItems: 'center'}}>
        <Image source={img1} />
        <Image source={img2} />
        <Image source={img3} />
      </View>
      <Image source={bigimg} style={{alignSelf: 'center'}} />
    </View>
    <View style={{flexDirection:"row"}}>
        <Image source={img4}/>
        <Image source={img5}/>
        <Image source={img6}/>
    </View>
    </View>
  );
};

export default DiscoverImages;

const styles = StyleSheet.create({});
