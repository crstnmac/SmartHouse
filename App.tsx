import React from 'react';
import {StatusBar, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import tw from 'twrnc';
const Stack = createNativeStackNavigator();

const HomeScreen: React.FC = () => {
  return (
    <View style={tw`flex flex-row justify-between `}>
      <View style={tw`bg-purple-300 w-1/2 h-25 rounded-3xl`}>
        <Text style={tw`text-black text-center `}>Hello</Text>
      </View>
      <View style={tw`bg-purple-300 w-1/2 h-25 rounded-3xl`}>
        <Text style={tw`text-black text-center`}>World</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
