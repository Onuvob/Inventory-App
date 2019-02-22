/*
    www.sonjoy.info
*/
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';

import Home from './pages/Home';
import Profile from './pages/Profile';
import AddStore from './pages/AddStore';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import StoreList from './pages/StoreList';
import AddCategories from './pages/AddCategories';
import { StyleProvider, Container, Content, Header, Body, Icon } from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';



export default class Menu extends Component
{
    render()
    {
        return(

            <MyApp/>

        )
    }
}

const CustomDrawerContentComponent = (props) => (

    <Container style={{ backgroundColor: 'rgb(32, 53, 70)' }}>
        <Header transparent style={{ backgroundColor: "red", height: 100 }}>

            <StatusBar barStyle="light-content"/>

            <Body>
                <Icon style={{ fontSize: 60 }}>
                
                    <FontAwesome style={{color: 'white'}} >{Icons.parachuteBox}</FontAwesome>
                   
                </Icon>
            </Body>
        </Header>

        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
)


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
    
    },
    {
      intialRouteName: 'Home',

      //drawerBackgroundColor: 'rgb(32, 53, 70)',
      
      drawerType: 'back',

      contentComponent: CustomDrawerContentComponent,

      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',

      contentOptions: {
        
          activeTintColor: 'red',
          activeBackgroundColor: 'white',
          inactiveLabelStyle: {
              color: 'white'
          },

          itemsContainerStyle: {
              marginVertical: 0,
          },
          iconContainerStyle: {
              opacity: 1
          }
      }
    }
    
  );


const MyApp = createAppContainer(MyDrawerNavigator);



const styles = StyleSheet.create({

  drawerImage: 
  {
      height: 120,
      width: 120,
      borderRadius: 75
  }
})





