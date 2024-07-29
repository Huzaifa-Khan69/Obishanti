import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Chat from '../Components/Chat';
import images from '../assets/images';

const Chats = ({navigation}) => {
  const chat = [
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'You',
      message: 'hello',
      time: '12:40 AM',
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'Charles',
      message: 'hello',
      time: '12:40 AM',
      sender:"other"
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'You',
      message: 'hello',
      time: '12:40 AM',
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'Charles',
      message: 'hello',
      time: '12:40 AM',
      sender:"other"
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'You',
      message: 'hello',
      time: '12:40 AM',
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'Charles',
      message: 'hello',
      time: '12:40 AM',
      sender:"other"
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'You',
      message: 'hello',
      time: '12:40 AM',
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'You',
      message: 'hello',
      time: '12:40 AM',
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'Charles',
      message: 'hello',
      time: '12:40 AM',
      sender:"other"
    },
    {
      img: images.story2,
      name: 'Charles James',
      sendername: 'Charles',
      message: 'hello',
      time: '12:40 AM',
      sender:"other"
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#F3FDFF'}}>
      <Header
        icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
        text={'Chat Box'}
        textStyle={{color: 'black'}}
        headerStyle={{backgroundColor: '#F3FDFF'}}
        onPress={() => navigation.goBack()}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          placeholder="Search"
          style={{
            height: 45,
            width: '100%',
            backgroundColor: '#2D1A3A',
            borderRadius: 30,
            paddingLeft: 20,
            fontSize: 18,
            color: 'white',
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
        {chat.map((item, index) => {
          return (
            <Chat
              key={index}
              img={item.img}
              name={item.name}
              sendername={item.sendername}
              message={item.message}
              time={item.time}
              sender={item.sender}
              onPress={()=>navigation.navigate("ChatInner",{data:item})}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
