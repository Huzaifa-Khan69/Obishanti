import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../Components/Input';
import Button from '../Components/Button';


const ResetPassword = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
    <Header
      icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
      text={'My Petz'}
    />
    <View style={{alignItems: 'center', justifyContent: 'center',marginTop:50}}>
    <Text style={{color: 'black', fontSize: 30,marginBottom:10}}>Reset Passowrd</Text>
    <Input placeholder={"New Password"}/>
    <Input placeholder={"Confirm Password"}/>
    <Button text={"Reset & Go To Login"} onPress={()=>navigation.navigate('Login')}/>
    </View>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({})