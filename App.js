import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from './src/Screens/Splash';
import Splash2 from './src/Screens/Splash2';
import Screen1 from './src/Screens/Screen1';
import Screen2 from './src/Screens/Screen2';
import Screen3 from './src/Screens/Screen3';
import Welcome from './src/Screens/Welcome';
import Login from './src/Screens/Login';
import SignUpWithOther from './src/Screens/SignUpWithOther';
import SignUp from './src/Screens/SignUp';
import ForgetPassword from './src/Screens/ForgetPassword';
import VerificationCode from './src/Screens/VerificationCode';
import ResetPassword from './src/Screens/ResetPassword';
import Home from './src/Screens/Home';
import Discover from './src/Screens/Discover';
import Search from './src/Screens/Search';
import RecentSearch from './src/Screens/RecentSearch';
import Navigation from './src/Routes/Navigation';
import SelectedPost from './src/Screens/SelectedPost';
import PostComment from './src/Screens/PostComment';
import NotificationScreen from './src/Screens/NotificationScreen';
import Chats from './src/Screens/Chats';
import ChatInner from './src/Screens/ChatInner';
import Chatprofile from './src/Screens/Chatprofile';
import Profile from './src/Screens/Profile';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/Store';
import Reels from './src/Screens/Reels';

const App = () => {
  return (
    // {/* <Splash/> */}
    // <Splash2/>
    // <Screen1/>
    // <Screen2/>
    // <Screen3/>
    //  <Welcome/>
    // <Login />
    // <SignUpWithOther/>
    // <SignUp/>
    // <ForgetPassword/>
    // <VerificationCode/>
    // <ResetPassword/>
    // <Home/>
    // <Discover/>
    // <Search/>
    // <RecentSearch/>
    // <SelectedPost/>
    // <PostComment/>
    // <NotificationScreen/>
    // <Chats/>
    // <ChatInner/>
    // <Chatprofile/>
    // <Profile/>
    // <Reels/>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
