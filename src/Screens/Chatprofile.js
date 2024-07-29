import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from "react-native-vector-icons/Feather"

const Chatprofile = ({route,navigation}) => {
  const {data}=route.params
  const sharedmedia = [
    {
      img: images.shared1,
    },
    {
      img: images.shared2,
    },
    {
      img: images.shared3,
    },
    {
      img: images.shared4,
    },
    {
      img: images.shared5,
    },
    {
      img: images.shared6,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#F3FDFF'}}>
      <Header
       onPress={() => navigation.goBack()}
        icon={<AntDesign name={'arrowleft'} size={28} color={'black'} />}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={data.img} style={{width: 125, height: 125}} />
        <Text style={{color: 'black', fontSize: 22, top: 10}}>
          {data.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            top: 25,
            width: '80%',
          }}>
          <TouchableOpacity
          onPress={()=>navigation.navigate("Profile")}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Ionicons name={'person-outline'} size={28} color={'black'} />
            <Text style={{color: 'black'}}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <Feather name={'bell'} size={26} color={'black'} />
            <Text style={{color: 'black'}}>Mute</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <AntDesign name={'search1'} size={25} color={'black'} />
            <Text style={{color: 'black'}}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <MaterialIcons
              name={'report-gmailerrorred'}
              size={28}
              color={'black'}
            />
            <Text style={{color: 'black'}}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <MaterialIcons name={'block'} size={25} color={'black'} />
            <Text style={{color: 'black'}}>Block</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 22}}>Shared Media</Text>
        <View style={{flexDirection: 'row',flexWrap:"wrap"}}>
          {sharedmedia.map((item,index) => {
            return( 
              <View key={index} style={{width:"33%",}}>
            <Image source={item.img} key={index}/>
            </View>
          )})}
        </View>
      </View>
    </View>
  );
};

export default Chatprofile;

const styles = StyleSheet.create({});
