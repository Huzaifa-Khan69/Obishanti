import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Button from '../Components/Button';
import color from '../Theme/color';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={images.backgroundwithcatanddog}
        style={{position: 'absolute'}}
      />
      <Image
        source={images.side1}
        style={{position: 'absolute', marginTop: 20, marginLeft: 250}}
      />
      <Image
        source={images.side2}
        style={{position: 'absolute', marginTop: 450}}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>
          Welcome To
        </Text>
        <Text style={{color: '#9BEDFF', fontSize: 40, fontWeight: 'bold'}}>
          Obishanti
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{color: 'white', fontSize: 15, marginBottom: 15}}>
          Time To Get Started
        </Text>
        <Button text={"Get Started! Sign Up"} onPress={()=>navigation.navigate("SignUpWithOther")}/>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text style={{color: 'white', fontSize: 15}}>
            Already Have An Account
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text style={{color: color.blue, marginLeft: 8, fontSize: 15}}>
              Login Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
