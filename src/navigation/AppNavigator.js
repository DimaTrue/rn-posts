import { Easing, Animated } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

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



//export default createAppContainer(MainStack);

// const MainStack = createStackNavigator(
//   {
//     Login: {
//       screen: Login,
//       navigationOptions: {
//         gesturesEnabled: false,
//       },
//     },
//     Profile: {
//       screen: Profile,
//       navigationOptions: {
//         gesturesEnabled: false,
//       },
//     },
//     Posts: {
//       screen: Posts,
//       navigationOptions: {
//         gesturesEnabled: false,
//       },
//     },
//     AddPost: {
//       screen: AddPost,
//       navigationOptions: {
//         gesturesEnabled: false,
//       },
//     },
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Login',
//     transitionConfig: () => ({
//       mode: 'card',
//       navigationOptions: params => ({
//         gesturesEnabled: true,
//         gesturesDirection: 'inverted',
//       }),
//       transitionSpec: {
//         duration: 250,
//         easing: Easing.out(Easing.poly(4)),
//         timing: Animated.timing,
//         useNativeDriver: true,
//       },
//       screenInterpolator: (sceneProps) => {
//         const { layout, position, scene } = sceneProps;

//         const thisSceneIndex = scene.index;
//         const width = layout.initWidth;

//         const translateX = position.interpolate({
//           inputRange: [thisSceneIndex - 1, thisSceneIndex],
//           outputRange: [width, 0],
//         });

//         return { transform: [{ translateX }] };
//       },
//     }),
//   },
// );
