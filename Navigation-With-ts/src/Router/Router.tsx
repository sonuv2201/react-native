import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen options={{
          headerShown:false
        }} name="Home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({})