import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTab from '../Components/BottomTab';
import {useDispatch} from 'react-redux';
import {selectOption} from '../redux/ColorSlice';
import color from '../Theme/color';
import Comment from '../Components/Comment';

const Reels = ({navigation}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [clickComment, setClickComment] = useState(false);
  const comments = [
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
    {
      img: images.story2,
      username: '@Mary_Elizabeth',
      time: '5d',
      comment:
        'Lorem Ipsum Dolor Sit Amet, Consetetur lekdkf kdkjd jdhdfo kkklsmm ,a fjfjirjkff kdfffkfj gjkslfgf dklfjgk',
      likes: '196',
      more: 'View 67 More Reply',
    },
  ];
  const shareaccount = [
    {
      img: images.story4,
      name: '@Lisa_Moore',
    },
    {
      img: images.story5,
      name: '@HandeyHall_112',
    },
    {
      img: images.story1,
      name: '@Diska_Leech',
    },
    {
      img: images.story5,
      name: '@BaiLu',
    },
    {
      img: images.story2,
      name: '@LiYuTan_45',
    },
    {
      img: images.story4,
      name: '@HatimTai',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Image source={images.reels} style={{position: 'absolute'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{color: 'white', fontSize: 24}}>Reels</Text>
        <EvilIcons name={'camera'} size={36} color={'white'} />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          flexDirection: 'row',
          bottom: 20,
        }}>
        <View style={{padding: 10, flex: 1, justifyContent: 'flex-end'}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.story2} style={{width: 50, height: 50}} />
            <View style={{left: 12, justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 15}}>
                @Mary_Elizabeth
              </Text>
              <Text
                style={{
                  color: '#9BEDFF',
                  fontWeight: '600',
                  fontSize: 15,
                  top: 5,
                }}>
                Follow
              </Text>
            </View>
          </View>
          <Text style={{color: 'white', top: 5}}>
            Lorem Ipsum Dolor Sit Amet, Consetetur ....
          </Text>
        </View>

        <View
          style={{alignSelf: 'flex-end', padding: 10, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <AntDesign name={'hearto'} size={28} color={'white'} />
            <Text style={{color: 'white', fontSize: 16}}>1,245</Text>
          </View>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <TouchableOpacity
              onPress={() => {
                setIsOpen(true), setClickComment(true);
              }}>
              <MaterialCommunityIcons
                name={'comment-outline'}
                size={28}
                color={'white'}
              />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 16}}>1,245</Text>
          </View>
          <View style={{alignItems: 'center', bottom: 10}}>
            <TouchableOpacity
              onPress={() => {
                setIsOpen(true);
              }}>
              <MaterialCommunityIcons
                name={'share-outline'}
                size={35}
                color={'white'}
              />
            </TouchableOpacity>
            <Text style={{color: 'white', fontSize: 16}}>20</Text>
          </View>
          <View>
            <Entypo name={'dots-three-vertical'} size={20} color={'white'} />
          </View>
        </View>
      </View>

      <View style={{justifyContent: 'flex-end'}}>
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
          reelsOnPress={() => {
            navigation.navigate('Reels'), dispatch(selectOption(4));
          }}
        />
      </View>
      <Modal transparent={true} visible={isOpen} animationType="slide">
        <TouchableOpacity
          onPress={() => {
            setIsOpen(false), setClickComment(false);
          }}
          style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              height: '62%',
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
              position: 'absolute',
              bottom: 0,
              backgroundColor: color.dark_purple,
            }}>
            {clickComment ? (
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    textAlign: 'center',
                    marginVertical: 10,
                  }}>
                  Comments
                </Text>
                <View
                  style={{borderWidth: 1, width: '100%', borderColor: 'grey'}}
                />
                <ScrollView>
                  {comments.map((item, index) => {
                    return (
                      <Comment
                      key={index}
                        img={item.img}
                        username={item.username}
                        time={item.time}
                        comment={item.comment}
                        likes={item.likes}
                        more={item.more}
                        textStyle={{color: 'white'}}
                      />
                    );
                  })}
                </ScrollView>
              </View>
            ) : (
              <View style={{flex:1}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 10,
                  }}>
                  <TextInput
                    onPress={() => navigation.navigate('Search')}
                    placeholder="Search"
                    style={{
                      height: 45,
                      width: '95%',
                      backgroundColor: '#2D1A3A',
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
                    <AntDesign name={'search1'} size={25} color={'white'} />
                  </TouchableOpacity>
                </View>
                <Text style={{color: 'white', left: 12, fontSize: 16}}>
                  Recent
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    width: '94%',
                    top: 5,
                    borderColor: color.purple,
                    alignSelf: 'center',
                  }}
                />
                <View style={{flexDirection: 'row', flexWrap: 'wrap', top: 10}}>
                  {shareaccount.map((item, index) => {
                    return (
                      <TouchableOpacity
                      key={index}
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '33%',
                          marginVertical: 5,
                        }}>
                        <Image source={item.img} />
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View style={{flex:1,justifyContent:"flex-end"}}>
                  <View
                    style={{
                      borderWidth: 1,
                      width: '100%',
                      top: 5,
                      borderColor: color.purple,
                      alignSelf: 'center',
                    }}
                  />
                  <View style={{flexDirection: 'row', padding: 10}}>
                    <View style={{alignItems: 'center'}}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 30,
                          backgroundColor: color.purple,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <AntDesign name={'plus'} size={25} color={'white'} />
                      </View>
                      <Text style={{color: 'white'}}>Add to Story</Text>
                    </View>
                    <View style={{alignItems: 'center', marginHorizontal: 20}}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 30,
                          backgroundColor: color.purple,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <AntDesign
                          name={'sharealt'}
                          size={25}
                          color={'white'}
                        />
                      </View>
                      <Text style={{color: 'white'}}>Share</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 30,
                          backgroundColor: color.purple,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Entypo name={'link'} size={25} color={'white'} />
                      </View>
                      <Text style={{color: 'white'}}>Copy Link</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({});
