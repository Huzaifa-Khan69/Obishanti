import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../Theme/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = ({
  profilepic,
  uname,
  time,
  text,
  img,
  video,
  likes,
  comments,
  share,
  community,
  postOnPress,
  commentOnPress
}) => {
  return (
    <View
      style={{
        marginVertical: 10,
        backgroundColor: 'white',
        paddingVertical: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <Image source={profilepic} style={{width: 55, height: 55}} />
          <View style={{marginLeft: 15, justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 20}}>{uname}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'black'}}>{time}</Text>
              {community ? (
                <Text style={{color: 'grey', fontSize: 12, left: 10}}>
                  Community Post
                </Text>
              ) : null}
            </View>
          </View>
        </View>
        {community ? (
          <TouchableOpacity
            style={{
              width: 85,
              height: 35,
              backgroundColor: color.blue,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 45,
            }}>
            <Text style={{color: 'black', fontSize: 15}}>Join Now</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <TouchableOpacity onPress={postOnPress}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            width: '95%',
            alignSelf: 'center',
            marginTop: 8,
          }}>
          {text}
        </Text>
        <View style={{marginTop: 10}}>{img}</View>
        <View style={{marginTop: 10}}>{video}</View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 5}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <AntDesign name={'like2'} size={20} color={color.purple} />
          </TouchableOpacity>
          <Text
            style={{
              color: color.purple,
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            {likes}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={commentOnPress}>
            <MaterialCommunityIcons
              name={'comment-outline'}
              size={20}
              color={'black'}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            {comments}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name={'share-outline'}
              size={25}
              color={'black'}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            {share}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 135,
          }}>
          <Entypo name={'dots-three-vertical'} size={17} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
