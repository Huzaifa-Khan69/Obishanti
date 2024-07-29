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

const PostComment = ({navigation,route}) => {
  const {post} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#F3FDFF'}}>
      <Header2
        title={'My Petz'}
        icon1={<Entypo name={'direction'} size={25} color={'black'} />}
        icon2={<AntDesign name={'hearto'} size={20} color={'black'} />}
      />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name={'arrowleft'}
          size={25}
          color={'black'}
          style={{left: 12}}
        />
        </TouchableOpacity>
        <Post
          profilepic={post.profilepic}
          uname={post.uname}
          time={post.time}
          text={
            post.text
          }
          img={<Image source={post.img} style={{alignSelf: 'center'}} />}
          likes={post.likes}
          comments={post.comments}
          share={post.share}
          community={post.community}
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
            color:"black"
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
