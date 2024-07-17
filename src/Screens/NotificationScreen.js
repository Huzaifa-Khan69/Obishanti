import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../Theme/color';
import EvilIcons from "react-native-vector-icons/EvilIcons"

const NotificationScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F3FDFF'}}>
      <Header
        icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
        text={'Notification'}
        textStyle={{color: 'black'}}
        headerStyle={{backgroundColor:"#F3FDFF"}}
      />
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity
        style={{
          width: '35%',
          height: 35,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black'}}>Mark All As Read</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '60%',
          height: 35,
          backgroundColor: '#9BEDFF',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:"row"
        }}><View style={{backgroundColor:"#F4E4FF",width:25,height:25}}>
            <EvilIcons name={"bell"} size={25} color={color.purple}/>
            </View>
        <Text style={{color: 'black'}}>Mark All As Read</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
