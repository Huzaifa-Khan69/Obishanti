import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Comment = ({img,username,time,comment,likes,more,textStyle}) => {
  return (
    <View style={{flexDirection: 'row',left:10,marginVertical:10}}>
      <Image source={img} style={{width: 50, height: 50}} />
      <View style={{left:12}}>
        <View style={{flexDirection: 'row',alignItems:"center"}}>
          <Text style={[{color: 'black', fontSize: 18},textStyle]}>{username}</Text>
          <Text style={[{color: 'black', marginLeft: 10},textStyle]}>{time}</Text>
        </View>
        <Text style={[{color: 'black',width:250,marginVertical:2},textStyle]}>
          {comment}
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <AntDesign name={'like2'} size={20} color={'black'} />
          </TouchableOpacity>
          <Text
            style={[{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
            },textStyle]}>
            {likes}
          </Text>
          <Text style={{color: 'black',left:10,fontSize:18,fontWeight:"bold"}}>|</Text>
          <TouchableOpacity style={{left:20}}>
            <Text style={[{color:"black",fontSize:16,fontWeight:"bold"},textStyle]}>{more}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({});
