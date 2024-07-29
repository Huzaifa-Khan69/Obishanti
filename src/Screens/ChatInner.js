import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../Theme/color';
import Message from '../Components/Message';
import images from '../assets/images';

const ChatInner = ({navigation, route}) => {
  const {data} = route.params;
  const chat = [
    {
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
      from: 'other',
    },
    {
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      from: 'me',
    },
    {
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
      from: 'other',
    },
    {
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      from: 'me',
    },
    {
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
      from: 'me',
    },
    {
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
      from: 'other',
    },
    {
      message:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
      from: 'other',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#F3FDFF'}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 5,
          alignItems: 'center',
          width: '95%',
          justifyContent: 'space-between',
          height: 50,
        }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name={'arrowleft'} size={28} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Chatprofile",{data:data})} style={{width:"50%"}}>
          <Text style={{color: 'black', fontSize: 22}}>
            {data.name}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '25%',
            alignItems: 'center',
          }}>
          <Feather name={'phone'} size={20} color={color.purple} />
          <Feather name={'camera'} size={20} color={color.purple} />
          <Entypo name={'dots-three-vertical'} size={20} color={'black'} />
        </View>
      </View>

      <FlatList
        data={chat}
        renderItem={({item}) => (
          <Message
            img={data.img}
            message={item.message}
            from={item.from}
            time={'02:00 PM'}
          />
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <View style={{width: '85%'}}>
          <TextInput
            placeholder="Text Here"
            style={{
              height: 45,
              width: '100%',
              backgroundColor: '#565358',
              borderRadius: 30,
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
            <Entypo name={'attachment'} size={20} color={'white'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            backgroundColor: color.purple,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            left: 4,
          }}>
          <Ionicons name={'send'} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInner;

const styles = StyleSheet.create({});
