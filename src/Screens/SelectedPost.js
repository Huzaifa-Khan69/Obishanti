import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../assets/images'
import Post from '../Components/Post'

const SelectedPost = ({navigation,route}) => {
  const {post} = route.params;
  console.log(post)
  return (
    <ScrollView>
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
          commentOnPress={()=>navigation.navigate("PostComment",{post:post})}
        />
    </ScrollView>
  )
}

export default SelectedPost

const styles = StyleSheet.create({})