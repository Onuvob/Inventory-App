/*
    www.sonjoy.info
*/
import React, {Component} from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Icon, Header, Content, Container, Button, Left } from 'native-base';


export default class Home extends Component
{
    

    render()
    {
        return(

            <Container style={styles.container}>

                <StatusBar barStyle="light-content"/>
                
                <Content contentContainerStyle={{

                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}>

                    <Text style={styles.text}>Home</Text>
                    
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

