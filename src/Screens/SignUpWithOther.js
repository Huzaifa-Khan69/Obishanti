import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Button from '../Components/Button';
import images from '../assets/images';
import color from '../Theme/color';

const SignUpWithOther = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
        text={'My Petz'}
      />
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{color: 'black', fontSize: 25, marginBottom: 20}}>
          Sign Up For Free
        </Text>
        <Button
          icon={<AntDesign name={'apple1'} size={30} color={'black'} />}
          text={'login with Apple'}
          buttonStyle={{flexDirection: 'row', justifyContent: 'space-evenly'}}
          textStyle={{marginRight: 50}}
          onPress={()=>navigation.navigate("Home")}
        />
        <Button
          icon={
            <Image source={images.google} style={{width: 30, height: 30}} />
          }
          text={'login with google'}
          buttonStyle={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 20,
          }}
          textStyle={{marginRight: 50}}
          onPress={()=>navigation.navigate("Home")}
        />
        <Button
          icon={
            <Image
              source={images.facebook}
              style={{width: 30, height: 30, tintColor: 'black'}}
            />
          }
          text={'login with facebook'}
          buttonStyle={{flexDirection: 'row', justifyContent: 'space-evenly'}}
          textStyle={{marginRight: 50}}
          onPress={()=>navigation.navigate("Home")}
        />
      </View>
      <View style={{width: '100%', borderWidth: 1, borderColor: '#9F2CBF'}} />
      <Button
        icon={<Fontisto name={'email'} size={30} color={'white'} />}
        text={'Sign Up with email'}
        buttonStyle={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: color.dark_purple,
          alignSelf:"center",
          marginTop:40 
        }}
        textStyle={{marginRight: 50,color:"white"}}
        onPress={()=>navigation.navigate("SignUp")}
      />
      <Image source={images.dog3} style={{alignSelf:"center"}}/>
    </View>
  );
};

export default SignUpWithOther;

const styles = StyleSheet.create({});
