import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

const TabUI = (props: BottomTabBarProps) => {
  const { navigation,descriptors, state,insets} = props;
  const handleTabPress = (routeName: string) => {
    navigation.navigate(routeName);
  };
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options,route:routes } = descriptors[route.key];
        const isFocused = state.index === index;
        const color = isFocused ? '#0077c9' : '#828282';
        const icon:any = options.tabBarLabel;
        
        return ( 
          <TouchableOpacity
            key={route.name}
            style={styles.tabButton}
            onPress={() => handleTabPress(route.name)}
          >
            <AntDesign name={icon} size={15} color={color} />
            <Text style={{ color, marginTop: 4 }}>{options.title || route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View> 
  )
}

export default TabUI

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5'
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})