import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../Components/Input';
import Button from '../Components/Button';
import color from '../Theme/color';

const VerificationCode = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
        text={'My Petz'}
        onPress={() => navigation.goBack()}
      />
      <View style={{alignItems: 'center', justifyContent: 'center',marginTop:50}}>
        <Text style={{color: 'black', fontSize: 30}}>Verification Code</Text>
        <Text style={{color: 'black', fontSize: 15,marginTop:8}}>
          4 Digit code Has Been Sent To
        </Text>
        <Text style={{color: 'black', fontSize: 15}}>+ 123-456-7890</Text>
        <View style={{flexDirection:"row"}}>
            <Input inputStyle={{width:50,height:50,marginRight:10}}/>
            <Input inputStyle={{width:50,height:50,marginHorizontal:10}}/>
            <Input inputStyle={{width:50,height:50,marginHorizontal:10}}/>
            <Input inputStyle={{width:50,height:50,marginLeft:10}}/>
        </View>
        <Button text={"Submit"}
        buttonStyle={{marginTop:15}}
        onPress={()=>navigation.navigate("ResetPassword")}/>
        <View style={{alignItems: 'flex-end', width: '95%',marginTop:10}}>
        <TouchableOpacity style={{width: '50%'}}>
          <Text
            style={{
              color: color.purple,
              fontSize: 18,
              textAlign: 'right',
            }}>
            Resend Code?
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default VerificationCode;

const styles = StyleSheet.create({});
