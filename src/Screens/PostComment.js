import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Header2 from '../Components/Header2';
import Post from '../Components/Post';
import images from '../assets/images';
import Comment from '../Components/Comment';
import color from '../Theme/color';

const PostComment = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F3FDFF'}}>
      <Header2
        title={'My Petz'}
        icon1={<Entypo name={'direction'} size={25} color={'black'} />}
        icon2={<AntDesign name={'hearto'} size={20} color={'black'} />}
      />
      <ScrollView>
        <AntDesign
          name={'arrowleft'}
          size={25}
          color={'black'}
          style={{left: 12}}
        />
        <Post
          profilepic={images.story1}
          uname={'Charles James'}
          time={'7h'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
          }
          img={<Image source={images.bigpic} style={{alignSelf: 'center'}} />}
          likes={'196'}
          comments={'20'}
          share={'6'}
        />
        <Comment
          img={images.story2}
          username={'@Mary_Elizabeth'}
          time={'5d'}
          comment={
            'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk'
          }
          likes={'196'}
          more={'View 67 More Reply'}
        />
        <Comment
          img={images.story2}
          username={'@Mary_Elizabeth'}
          time={'5d'}
          comment={
            'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk'
          }
          likes={'196'}
          more={'View 67 More Reply'}
        />
        <Comment
          img={images.story2}
          username={'@Mary_Elizabeth'}
          time={'5d'}
          comment={
            'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk'
          }
          likes={'196'}
          more={'View 67 More Reply'}
        />
        <Comment
          img={images.story2}
          username={'@Mary_Elizabeth'}
          time={'5d'}
          comment={
            'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk'
          }
          likes={'196'}
          more={'View 67 More Reply'}
        />
        <Comment
          img={images.story2}
          username={'@Mary_Elizabeth'}
          time={'5d'}
          comment={
            'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk'
          }
          likes={'196'}
          more={'View 67 More Reply'}
        />
        <Comment
          img={images.story2}
          username={'@Mary_Elizabeth'}
          time={'5d'}
          comment={
            'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk'
          }
          likes={'196'}
          more={'View 67 More Reply'}
        />
        <Comment
          img={images.story2}
          username={'@Mary_Elizabeth'}
          time={'5d'}
          comment={
            'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk'
          }
          likes={'196'}
          more={'View 67 More Reply'}
        />
      </ScrollView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          placeholder="Add Comment"
          placeholderTextColor={'#C5C5C5'}
          style={{
            height: 45,
            width: '100%',
            backgroundColor: '#DDF1F3',
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
          <AntDesign name={'down'} size={25} color={color.purple} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostComment;

const styles = StyleSheet.create({});
