import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Listen from '../views/Listen';
import Speak from '../views/Speak';
import Index from '../views/Index';
import Money from '../views/Money';
import MoneyLists from '../views/MoneyLists';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Listen" component={Listen} />
        <Stack.Screen name="Speak" component={Speak} />
        <Stack.Screen name="Money" component={Money} />
        <Stack.Screen name="MoneyLists" component={MoneyLists} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Route;
