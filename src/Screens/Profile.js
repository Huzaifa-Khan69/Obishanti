import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../assets/images';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../Theme/color';
import Post from '../Components/Post';
import BottomTab from '../Components/BottomTab';
import { useDispatch } from 'react-redux';
import { selectOption } from '../redux/ColorSlice';

const Profile = ({navigation}) => {
  const dispatch=useDispatch()
  const [follow, setFollow] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#F3FDFF'}}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 5,
          alignItems: 'center',
          width: '95%',
          justifyContent: 'space-between',
          height: 50,
        }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name={'arrowleft'} size={28} color={'black'} />
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 22}}>Charles James</Text>
        <Image source={images.unevenlines} />
      </View>
      <ScrollView>
        <Image source={images.profilebackground} />
        <View
          style={{
            //   alignItems: 'center',
            justifyContent: 'center',
            height: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              height: 120,
              top: 15,
              width: '100%',
              position: 'absolute',
              bottom: 0,
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => setFollow(!follow)}
              style={{
                width: 90,
                height: 30,
                backgroundColor: '#9BEDFF',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {follow ? (
                <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
                  Unfollow
                </Text>
              ) : (
                <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
                  Follow
                </Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 90,
                height: 30,
                backgroundColor: '#F4E4FF',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
                Message
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={images.story2}
            style={{width: 110, height: 110, alignSelf: 'center'}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 30,
              marginHorizontal: 15,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Feather name={'user-check'} size={28} color={'black'} />
              <Text style={{color: 'black', fontSize: 18}}>211 Following</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Feather name={'plus-square'} size={28} color={'black'} />
              <Text style={{color: 'black', fontSize: 18}}>127 Posts</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <AntDesign name={'adduser'} size={28} color={'black'} />
              <Text style={{color: 'black', fontSize: 18}}>194 Followers</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 90,
            backgroundColor: 'white',
            height: 40,
            alignItems: 'center',
            width: '100%',
          }}>
          <View style={{flexDirection: 'row', left: 10}}>
            <Image
              source={images.story3}
              style={{width: 25, height: 25, position: 'absolute'}}
            />
            <Image
              source={images.story4}
              style={{width: 25, height: 25, left: 10}}
            />
          </View>
          <Text style={{color: 'black', fontSize: 18, left: 25}}>
            Followed By Mary Elizabeth & joseph
          </Text>
        </View>
        {follow ? (
          <View>
            <View style={{padding: 10, top: 5, backgroundColor: 'white'}}>
              <Text style={{color: 'black', fontSize: 22}}>Details</Text>
            </View>
            <View
              style={{padding: 10, backgroundColor: 'white', marginTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <SimpleLineIcons
                  name={'graduation'}
                  size={25}
                  color={'black'}
                />
                <Text style={{color: 'black', fontSize: 18, left: 10}}>
                  Studied at Standford University
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <SimpleLineIcons name={'home'} size={25} color={'black'} />
                <Text style={{color: 'black', fontSize: 18, left: 10}}>
                  Lives In America
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <SimpleLineIcons
                  name={'location-pin'}
                  size={25}
                  color={'black'}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    left: 10,
                    fontWeight: '500',
                  }}>
                  From America
                </Text>
              </View>
              <View>
                <Text style={{color: 'black', fontSize: 18, marginTop: 10}}>
                  See More About Charles James ..
                </Text>
              </View>
            </View>
            <View style={{padding: 10, backgroundColor: 'white', marginTop: 5}}>
              <Text style={{color: 'black', fontSize: 20}}>Posts</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={images.story2} style={{width: 45, height: 45}} />
                <TextInput
                  placeholderTextColor="black"
                  placeholder="Write Something About Charles"
                  style={{left: 5, fontSize: 15, width: '75%'}}
                />
                <TouchableOpacity>
                  <Ionicons
                    name={'images-outline'}
                    size={30}
                    color={color.purple}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                top: 5,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={images.picture} style={{width: 35, height: 35}} />
              <Text style={{color: 'black', fontSize: 25, left: 10}}>
                Photos
              </Text>
            </View>
            <Post
              profilepic={images.story2}
              uname={'Charles James'}
              time={'7h'}
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam oluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no'
              }
              likes={'196'}
              comments={'20'}
              share={'5'}
            />
            <Post
              profilepic={images.story2}
              uname={'Charles James'}
              time={'7h'}
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
              }
              img={<Image source={images.post1} />}
              likes={'196'}
              comments={'20'}
              share={'5'}
            />
          </View>
        ) : (
          <View
            style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
            <Image source={images.lock} />
            <View style={{left: 10}}>
              <Text style={{color: 'black', fontSize: 18}}>
                This Account Is Privacy Protected!
              </Text>
              <Text style={{color: 'black', fontSize: 15}}>
                Follow This Account To See Their Activity
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
