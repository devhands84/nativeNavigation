import React from 'react';
import {NavigationContainer, TabActions} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from './screens/HomeScreen';
// import DetailScreen from './screens/DetailScreen';
import {View, Text, TouchableOpacity, Button} from 'react-native';
//import HeaderlessScreen from './screens/HeaderlessScreen';
//const Stack = createNativeStackNavigator();
import {SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      {/* <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button
        title="Open Settings"
        onPress={() => navigation.navigate('settings')}
      /> */}
    </View>
  );
}

function SearchScreen() {
  return <Text> Search</Text>;
}

function NotificationScreen() {
  return <Text> Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

// function SettingsScreen({navigation}) {
//   return (
//     <View>
//       <Text>
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//       </Text>
//     </View>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#fb8c00',
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'HOME',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'SEARCH',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: 'NOTIFICATION',
            tabBarIcon: ({color, size}) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: 'Message',
            tabBarIcon: ({color, size}) => (
              <Icon name="message" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
        drawerContent={({navigation}) => (
          <SafeAreaView>
            <Text>Custom drawer</Text>
            <Button
              title="Close Drawer"
              onPress={() => navigation.closeDrawer()}
            />
          </SafeAreaView>
        )}
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'HOME'}}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title: 'SETTINGS'}}
        />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             headerShown: false,
//             // title: '홈',
//             // headerStyle: {
//             //   backgroundColor: '#29b6f6',
//             // },
//             // headerTintColor: '#ffffff',
//             // headerTitleStyle: {
//             //   fontWeight: 'bold',
//             //   fontSize: 20,
//             // },
//           }}
//         />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           // options={({route}) => ({title: `상세 정보 ${route.params.id}`})}
//           options={{
//             headerBackVisible: false,
//             headerLeft: ({onPress}) => (
//               <TouchableOpacity onPress={onPress}>
//                 <Text>Left</Text>
//               </TouchableOpacity>
//             ),
//             headerTitle: ({children}) => (
//               <View>
//                 <Text>{children}</Text>
//               </View>
//             ),
//             headerRight: () => (
//               <View>
//                 <Text>Right</Text>
//               </View>
//             ),
//           }}
//         />
//         <Stack.Screen
//           name="Headerless"
//           component={HeaderlessScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
export default App;
