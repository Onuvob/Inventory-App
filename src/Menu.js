/*
    www.sonjoy.info
*/
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from './pages/Home';
import Profile from './pages/Profile';
import AddStore from './pages/AddStore';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import StoreList from './pages/StoreList';
import AddCategories from './pages/AddCategories';



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
    AddStore: {
      screen: AddStore,
    },
    AddProduct: {
      screen: AddProduct,
    },
    AddCategories: {
      screen: AddCategories,
    },
    StoreList: {
      screen: StoreList,
    },
    ProductList: {
      screen: ProductList,
    },
    
  });


const MyApp = createAppContainer(MyDrawerNavigator);





