import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, Profile, Reservation, Saved } from '../../screen';

import TabUI from './TabUI';
import TabHeader from './TabHeader/TabHeader';
import React from 'react';

interface TabDataInterface {
  data: TabDataTypeInterface[]
}

interface TabDataTypeInterface {
  name: string,
  headerTitle: string,
  title: string,
  tabBarLabel: string,
  component: JSX.Element
}



const Tab = createBottomTabNavigator();
const TabNavigation = () => {

  const tabData = [
    {
      name: 'Explore',
      headerTitle: 'Explore Page',
      title: 'Explore',
      tabBarLabel: 'search1',
      component: Explore
    },
    {
      name: 'Reservation',
      headerTitle: 'Reservation Page',
      title: 'Reservation',
      tabBarLabel: 'calendar',
      component: Reservation
    },
    {
      name: 'Saved',
      headerTitle: 'Saved Page',
      title: 'Saved',
      tabBarLabel: 'book',
      component: Saved
    },
    {
      name: 'Profile',
      headerTitle: 'Profile Page',
      title: 'Profile',
      tabBarLabel: 'user',
      component: Profile
    }
  ]

  return (
    <Tab.Navigator tabBar={props => <TabUI {...props} />}>
      {
        tabData.map((item,i) =>
          <Tab.Screen
            name={item.name}
            component={item.component}
            options={{
              header: (props) => <TabHeader {...props} />,
              headerTitle: item.headerTitle,
              title: item.title,
              tabBarLabel: item.tabBarLabel 
            }}
          />
        )
      }
      
    </Tab.Navigator>
  )
}

export default TabNavigation

