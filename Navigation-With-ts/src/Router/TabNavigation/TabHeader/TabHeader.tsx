import React from 'react';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TabHeader = (props:BottomTabHeaderProps) => {
  const {options,layout,route,navigation} = props;
  return(
    <Text><>{options.headerTitle || route.name}</></Text> 
  )
}

export default TabHeader