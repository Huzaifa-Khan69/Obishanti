import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
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

const Home = () => {
  const stories = [
    {img: images.story1},
    {img: images.story2},
    {img: images.story3},
    {img: images.story4},
    {img: images.story5},
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#E4E4E4'}}>
      <Header2
        title={'My Petz'}
        icon1={<Entypo name={'direction'} size={25} color={'black'} />}
        icon2={<AntDesign name={'hearto'} size={20} color={'black'} />}
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
        <Post
          profilepic={images.story1}
          uname={'Charles James'}
          time={'7h'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
          }
          img={<Image source={images.post1} style={{alignSelf: 'center'}} />}
          likes={"196"}
          comments={"20"}
          share={"6"}
        />
        <Post
          profilepic={images.story1}
          uname={'Charles James'}
          time={'7h'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no'
          }
          likes={"196"}
          comments={"20"}
          share={"6"}
        />
        <Post
          profilepic={images.story1}
          uname={'Charles James'}
          time={'7h'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
          }
          video={
            <Video
              // Can be a URL or a local file.
              source={videos.mainvideo}
              style={{
                width: '98%',
                height: 250,
                borderRadius: 50,
                alignSelf: 'center',
              }}
              repeat={true}
              controls={true}
            />
          }
          likes={"196"}
          comments={"20"}
          share={"6"}
        />
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
