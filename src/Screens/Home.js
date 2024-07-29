import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header2 from '../Components/Header2';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import color from '../Theme/color';
import Stories from '../Components/Stories';
import images from '../assets/images';
import Post from '../Components/Post';
import Video, {VideoRef} from 'react-native-video';
import videos from '../assets/videos';
import BottomTab from '../Components/BottomTab';
import {useDispatch} from 'react-redux';
import {selectOption} from '../redux/ColorSlice';

const Home = ({navigation}) => {
  const stories = [
    {img: images.story1},
    {img: images.story2},
    {img: images.story3},
    {img: images.story4},
    {img: images.story5},
  ];
  const post = [
    {
      profilepic: images.story2,
      uname: 'Charles James',
      time: '7h',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
      img: images.post1,
      likes: '196',
      comments: '20',
      share: '6',
    },
    {
      profilepic: images.story2,
      uname: 'Charles James',
      time: '7h',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no',
      likes: '196',
      comments: '20',
      share: '6',
      community: true,
    },
    {
      profilepic: images.story2,
      uname: 'Charles James',
      time: '7h',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
      likes: '196',
      comments: '20',
      share: '6',
    },
  ];
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, backgroundColor: '#E4E4E4'}}>
      <Header2
        title={'My Petz'}
        icon1={<Entypo name={'direction'} size={25} color={'black'} />}
        icon2={<AntDesign name={'hearto'} size={20} color={'black'} />}
        onPress1={() => navigation.navigate('Chats')}
        onPress2={() => navigation.navigate('NotificationScreen')}
      />
      <ScrollView>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            backgroundColor: 'white',
            marginTop: 10,
            height: 100,
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          {stories.map((item, index) => {
            return <Stories key={index} img={<Image source={item.img} />} />;
          })}
        </ScrollView>
        {post.map((item, index) => {
          return (
            <Post
              key={index}
              profilepic={item.profilepic}
              uname={item.uname}
              time={item.time}
              text={item.text}
              img={<Image source={item.img} style={{alignSelf: 'center'}} />}
              likes={item.likes}
              comments={item.comments}
              share={item.share}
              community={item.community}
              postOnPress={() =>
                navigation.navigate('SelectedPost', {post: item})
              }
            />
          );
        })}
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

export default Home;

const styles = StyleSheet.create({});
