import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header2 from '../Components/Header2'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../Theme/color';
import SearchResult from '../Components/SearchResult';
import images from '../assets/images';
import BottomTab from '../Components/BottomTab';

const RecentSearch = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#E4E4E4'}}>
      <Header2
        title={'My Petz'}
        icon1={<Entypo name={'direction'} size={25} color={'black'} />}
        icon2={<AntDesign name={'hearto'} size={20} color={'black'} />}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          marginVertical:8,
          height:40
        }}>
        <TouchableOpacity style={{justifyContent:"center",left:5,alignItems:"center"}}>
          <AntDesign name={'arrowleft'} size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={{color:"black",fontSize:20,width:"73%",left:25}}>Recent Searches</Text>
        <TouchableOpacity
          style={{
            // right: 20,
            justifyContent: 'center',
          }}>
            <Text style={{color:color.purple,fontSize:16}}>Clear All</Text>
        </TouchableOpacity>
      </View>
      <View style={{top:5}}>
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
      </View>
      <View style={{flex:1,justifyContent:"flex-end"}}>
      <BottomTab/>
      </View>
    </View>
  )
}

export default RecentSearch

const styles = StyleSheet.create({})