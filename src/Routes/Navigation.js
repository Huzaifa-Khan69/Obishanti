import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Splash2 from '../Screens/Splash2';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import SignUpWithOther from '../Screens/SignUpWithOther';
import SignUp from '../Screens/SignUp';
import ForgetPassword from '../Screens/ForgetPassword';
import VerificationCode from '../Screens/VerificationCode';
import ResetPassword from '../Screens/ResetPassword';
import Home from '../Screens/Home';
import Discover from '../Screens/Discover';
import Search from '../Screens/Search';
import RecentSearch from '../Screens/RecentSearch';
import SelectedPost from '../Screens/SelectedPost';
import PostComment from '../Screens/PostComment';
import NotificationScreen from '../Screens/NotificationScreen';
import Chats from '../Screens/Chats';
import ChatInner from '../Screens/ChatInner';
import Chatprofile from '../Screens/Chatprofile';
import Profile from '../Screens/Profile';
import Reels from '../Screens/Reels';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpWithOther" component={SignUpWithOther} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="RecentSearch" component={RecentSearch} />
        <Stack.Screen name="SelectedPost" component={SelectedPost} />
        <Stack.Screen name="PostComment" component={PostComment} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ChatInner" component={ChatInner} />
        <Stack.Screen name="Chatprofile" component={Chatprofile} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Reels" component={Reels} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
