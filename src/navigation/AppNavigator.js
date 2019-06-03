import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Posts from '../pages/Posts';
import AddPost from '../pages/AddPost';
import AuthLoading from '../pages/AuthLoading';

export const MainStack = createStackNavigator( {
     
  Posts: {
    screen: Posts,
    navigationOptions: {
    gesturesEnabled: false,
    },
  },
      Profile: {
        screen: Profile,
        navigationOptions: {
        gesturesEnabled: false,
        },
      },
      AddPost: {
        screen: AddPost,
        navigationOptions: {
        gesturesEnabled: false,
        },
      },
    },
    );

    export const AuthStack = createStackNavigator({ 
      Login: {
      screen: Login,
      navigationOptions: {
      gesturesEnabled: false,
      },
    }, 
  });

  export const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: MainStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);


