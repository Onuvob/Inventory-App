/*
    www.sonjoy.info
*/
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from './pages/Home';
import Profile from './pages/Profile';


export default class Menu extends Component
{
    render()
    {
        return(

            <MyApp/>

        )
    }
}


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Home,
    },
    Profile: {
      screen: Profile,
    },
  });


const MyApp = createAppContainer(MyDrawerNavigator);





