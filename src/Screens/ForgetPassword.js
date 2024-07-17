import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../Components/Button';
import Input from '../Components/Input';

const ForgetPassword = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
        text={'My Petz'}
      />
      <View style={{alignItems: 'center', justifyContent: 'center',marginTop:50}}>
        <Text style={{color: 'black', fontSize: 30,marginBottom:10}}>Forget Passowrd</Text>
        <Text style={{color: 'black', fontSize: 15, textAlign: 'center',width:"93%"}}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor
        </Text>
        <Input placeholder={"Enter Your Email"} inputStyle={{marginTop:25}}/>
        <Button text={"Send Code"}
        buttonStyle={{marginVertical:10}}
        onPress={()=>navigation.navigate("VerificationCode")}/>
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
