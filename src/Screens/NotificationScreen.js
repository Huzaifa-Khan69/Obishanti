import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../Theme/color';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Notification from '../Components/Notification';
import images from '../assets/images';

const NotificationScreen = ({navigation}) => {
  const newnotification = [
    {
      id: '1',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '2',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '3',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '4',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '5',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '6',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '7',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
  ];
  const earliernotification = [
    {
      id: '8',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '9',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '10',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '11',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '12',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
    {
      id: '1',
      img: images.story2,
      text: 'Mary Elizabeth start following you',
      read: false
    },
  ];
  const [notifications, setNotifications]=useState(newnotification)
  const [earliernotifications,setEarlierNotification]=useState(earliernotification)

  const markAsRead = (id) => {
    // Update the read status of the clicked notification
    const updateNotificationStatus = (notifications) =>
      notifications.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      );

      setNotifications(updateNotificationStatus(notifications));
      setEarlierNotification(updateNotificationStatus(earliernotifications));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F3FDFF'}}>
      <Header
        icon={<AntDesign name={'arrowleft'} size={25} color={'black'} />}
        text={'Notification'}
        textStyle={{color: 'black'}}
        headerStyle={{backgroundColor: '#F3FDFF'}}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}>
          <View style={{backgroundColor: '#F4E4FF', width: 25, height: 25}}>
            <EvilIcons name={'bell'} size={25} color={color.purple} />
          </View>
          <Text style={{color: 'black'}}>Push Notification</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
            marginVertical: 3,
          }}>
          New
        </Text>
        {notifications.map((item, index) => {
          return (
            <Notification
              key={index}
              img={item.img}
              text={item.text}
              read={item.read}
              onPress={()=>markAsRead(item.id)}
            />
          );
        })}

        <Text
          style={{
            fontSize: 20,
            color: 'black',
            textAlign: 'center',
            marginVertical: 3,
          }}>
          Earlier
        </Text>
        {earliernotifications.map((item, index) => {
          return (
            <Notification
              key={index}
              img={item.img}
              text={item.text}
              read={item.read}
              onPress={()=>markAsRead(item.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
