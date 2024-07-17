import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../assets/images'
import Post from '../Components/Post'

const SelectedPost = () => {
  return (
    <ScrollView>
    <Post
          profilepic={images.story1}
          uname={'Charles James'}
          time={'7h'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
          }
          img={<Image source={images.bigpic} style={{alignSelf: 'center'}} />}
          likes={"196"}
          comments={"20"}
          share={"6"}
        />
    </ScrollView>
  )
}

export default SelectedPost

const styles = StyleSheet.create({})