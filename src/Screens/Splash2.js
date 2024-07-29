import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import images from '../assets/images';

const Splash2 = ({navigation}) => {
  const slideLeftAnim = useRef(new Animated.Value(-500)).current;
  const slideRightAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.timing(slideLeftAnim, {
      toValue: 0,
      duration: 1000, // Adjust timing as needed
      useNativeDriver: true,
    }).start();

    Animated.timing(slideRightAnim, {
      toValue: 0,
      duration: 1000, // Adjust timing as needed
      useNativeDriver: true,
    }).start();
  }, [slideLeftAnim, slideRightAnim]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Screen1');
    },2000); // Adjust the delay time in milliseconds (e.g., 1000ms = 1 second)

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: '#4D1970',
        alignItems: 'center',
      }}>
      <Image source={images.background} style={{position: 'absolute'}} />
      <View
        style={{
          //   justifyContent: 'center',
          marginTop: 180,
          alignItems: 'center',
          position: 'absolute',
        }}>
        <Image
          source={images.paw}
          style={{position: 'absolute', alignSelf: 'center'}}
        />
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            marginTop: 25,
            marginBottom: 25,
            fontWeight: '600',
          }}>
          Welcome To
        </Text>
        <Animated.View
          style={[
            styles.textContainer,
            {transform: [{translateX: slideRightAnim}]},
          ]}>
          <Text
            style={{
              fontSize: 40,
              color: 'white',
              textAlign: 'center',
              fontWeight: '800',
            }}>
            M  Y
          </Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.textContainer,
            {transform: [{translateX: slideLeftAnim}]},
          ]}>
          <Text
            style={{
              fontSize: 40,
              color: 'white',
              textAlign: 'center',
              fontWeight: '800',
            }}>
            P  E  T  Z
          </Text>
        </Animated.View>
      </View>
      <View style={{height: '100%', justifyContent: 'flex-end'}}>
        <Image source={images.dog} />
      </View>
    </View>
  );
};

export default Splash2;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 20,
    marginVertical: 5,
  },
});
