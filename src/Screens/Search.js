import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header2 from '../Components/Header2';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../Theme/color';
import SearchResult from '../Components/SearchResult';
import images from '../assets/images';
import BottomTab from '../Components/BottomTab';
import { useDispatch } from 'react-redux';
import { selectOption } from '../redux/ColorSlice';

const Search = ({navigation}) => {
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
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          marginVertical:8
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={25} color={'black'} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={{
            height: 45,
            width: '89%',
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black', fontSize: 20, left: 10}}>Recent</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("RecentSearch")}>
          <Text style={{color: color.purple, right: 20, fontSize: 18}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <SearchResult
        img={images.story3}
        name={'Mary Elizabeth'}
        username={'@mary_elizabeth'}
      />
      <SearchResult
        img={images.story5}
        name={'Julia Curran'}
        username={'@julia_curran45'}
      />
      <SearchResult
        img={images.story2}
        name={'Bai Lu'}
        username={'@bai_lu85'}
      />
      <SearchResult
        img={images.story4}
        name={'Tracy White'}
        username={'@tracy99'}
      />
      <View style={{flex:1,justifyContent:"flex-end"}}>
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
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
