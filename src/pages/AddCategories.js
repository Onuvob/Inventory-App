/*
    www.sonjoy.info
*/
import React, {Component} from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Icon, Header, Content, Container, Button, Left } from 'native-base';

import FontAwesome, { Icons } from 'react-native-fontawesome';


export default class AddCategories extends Component
{

    static navigationOptions = {
        drawerLabel: 'Add Categories',
        drawerIcon: ({ tintColor }) => (
            <FontAwesome style={{color: 'red'}}>{Icons.tag}</FontAwesome>
        ),
    };
    

    render()
    {
        return(

            <Container style={styles.container}>

                <Header transparent style={{ backgroundColor: "transparent" }}>

                    <StatusBar barStyle="light-content"/>

                    <Left>
                        <Icon style={{ marginLeft: 20 }}>
                            <FontAwesome style={{color: 'white'}} onPress={()=> this.props.navigation.openDrawer()} >{Icons.bars}</FontAwesome>
                        </Icon>
                    </Left>
                </Header>
                
                <Content contentContainerStyle={{

                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}>

                    <Text style={styles.text}>Add Categories</Text>
                    
                </Content>
            </Container>

        )
    }
}

const styles = StyleSheet.create({

    container: 
    {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },

    text:
    {
        
        color: 'white'
            
    }

})

