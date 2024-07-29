import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header2 from '../Components/Header2';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import DiscoverImages from '../Components/DiscoverImages';
import images from '../assets/images';
import BottomTab from '../Components/BottomTab';
import DiscoverVideo from '../Components/DiscoverVideo';
import { useDispatch } from 'react-redux';
import { selectOption } from '../redux/ColorSlice';

const Discover = ({navigation}) => {
  const dispatch=useDispatch()
  return (
    <View style={{flex: 1, backgroundColor: '#E4E4E4'}}>
      <Header2
        title={'My Petz'}
        icon1={<Entypo name={'direction'} size={25} color={'black'} />}
        icon2={<AntDesign name={'hearto'} size={20} color={'black'} />}
        onPress1={() => navigation.navigate('Chats')}
        onPress2={() => navigation.navigate('NotificationScreen')}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
        onPress={()=>navigation.navigate("Search")}
          placeholder="Search"
          style={{
            height: 45,
            width: '100%',
            backgroundColor: '#2D1A3A',
            borderRadius: 30,
            marginVertical: 8,
            paddingLeft: 20,
            fontSize: 18,
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            height: '100%',
            justifyContent: 'center',
          }}>
          <AntDesign name={'search1'} size={25} color={'white'} />
        </TouchableOpacity>
      </View>
      <ScrollView>
      <DiscoverImages img1={images.recommend1}
      img2={images.recommend2}
      img3={images.recommend3}
      img4={images.recommend5}
      img5={images.recommend6}
      img6={images.recommend7}
      bigimg={images.recommend4}
      />
      <DiscoverVideo vid1={images.video1}
      vid2={images.video2}
      vid3={images.video3}/>
       <DiscoverImages img1={images.recommend9}
      img2={images.recommend10}
      img3={images.recommend11}
      img4={images.recommend12}
      img5={images.recommend13}
      img6={images.recommend14}
      bigimg={images.recommend8}
      ViewStyle={{flexDirection:"row-reverse"}}
      />
      </ScrollView>
      <BottomTab
        homeOnPress={() => {
          navigation.navigate('Home'), dispatch(selectOption(0));
        }}
        discoverOnPress={() => {
          navigation.navigate('Discover'), dispatch(selectOption(1));
        }}
        accountOnPress={() => {
          navigation.navigate('Profile'), dispatch(selectOption(5));
        }}
        reelsOnPress={()=>{navigation.navigate("Reels"), dispatch(selectOption(4))}}
      />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({});
