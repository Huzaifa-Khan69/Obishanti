import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../Components/Input';
import color from '../Theme/color';
import Button from '../Components/Button';
import images from '../assets/images';

const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
        text={'My Petz'}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
        <Input placeholder={'john@gmail.com'} />
        <Input placeholder={'Password'} />
      </View>
      <View style={{alignItems: 'flex-end', width: '95%'}}>
        <TouchableOpacity style={{width: '50%'}} onPress={()=>navigation.navigate("ForgetPassword")}>
          <Text
            style={{
              color: color.purple,
              fontSize: 18,
              textAlign: 'right',
            }}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        text={'Login'}
        buttonStyle={{alignSelf: 'center', marginTop: 20}}
        onPress={()=>navigation.navigate("Home")}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 18}}>
          Dont't Have An Account?
        </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate("SignUpWithOther")}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: color.purple, marginLeft: 5, fontSize: 18}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: '45%',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          position: 'absolute',
          bottom: 0,
          backgroundColor: color.dark_purple,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          icon={<AntDesign name={'apple1'} size={30} color={'black'} />}
          text={'login with Apple'}
          buttonStyle={{flexDirection: 'row', justifyContent: 'space-evenly'}}
          textStyle={{marginRight: 50}}
          onPress={()=>navigation.navigate("Home")}
        />
        <Button
          icon={<Image source={images.google} style={{width:30,height:30}}/>}
          text={'login with google'}
          buttonStyle={{flexDirection: 'row', justifyContent: 'space-evenly',marginVertical:20}}
          textStyle={{marginRight: 50}}
          onPress={()=>navigation.navigate("Home")}

        />
        <Button
          icon={<Image source={images.facebook} style={{width:30,height:30,tintColor:"black"}}/> }
          text={'login with facebook'}
          buttonStyle={{flexDirection: 'row', justifyContent: 'space-evenly'}}
          textStyle={{marginRight: 50}}
          onPress={()=>navigation.navigate("Home")}

        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
