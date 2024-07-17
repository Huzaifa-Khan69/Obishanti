import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../Components/Input';
import Button from '../Components/Button';
import images from '../assets/images';


const SignUp = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
    <Header
      icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
      text={'My Petz'}
    />
    <View
        style={{alignItems: 'center', justifyContent: 'center',flex:1}}>
        <Input placeholder={'First Name'} />
        <Input placeholder={'Last Time'} />
        <Input placeholder={'Email'} />
        <Input placeholder={'Password'} />
        <Input placeholder={'Confirm Password'} />
        <Button text={"Continue"} buttonStyle={{marginTop:10}} onPress={()=>navigation.navigate("Login")}/>
      </View>
      <Image source={images.catanddog} style={{alignSelf:"center"}}/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})