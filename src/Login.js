/*
    www.sonjoy.info
*/
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image,
    TouchableWithoudFeedback, StatusBar, TextInput,
    SafeAreaView, Keyboard, TouchableOpacity, 
    KeyboardAvoidingView } from 'react-native';


export default class Login extends Component
{
    render()
    {
        return(

            <SafeAreaView style={styles.container}>

                <StatusBar barStyle="light-content"/>


                <KeyboardAvoidingView behavior='padding' style={styles.container}>


                        <View style={styles.logoContainer}>

                            <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={require('../images/inventorylogo.png')} >
                                </Image>
                                
                            </View>

                            <View style={styles.infoContainer}>

                                <TextInput style={styles.input}
                                    placeholder = "Enter your email"
                                    placeholderTextColor = 'snow'
                                    keyboardType = 'email-address'
                                    returnKeyType = 'next'
                                    autoCorrect = {false}
                                    onSubmitEditing={()=> this.refs.textPassword.focus()}
                                />

                                <TextInput style={styles.input}
                                    placeholder = "Enter your password"
                                    placeholderTextColor = 'snow'
                                    secureTextEntry={true}
                                    returnKeyType = 'go'
                                    autoCorrect = {false}
                                    ref={"textPassword"}
                                />

                                <TouchableOpacity style={styles.button}>

                                    <Text style={styles.buttonText}>Sign In</Text>

                                </TouchableOpacity>

                            </View>

                        </View>

                    


                </KeyboardAvoidingView>

                

            </SafeAreaView>

            
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

        logoContainer: 
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },

        logo: 
        {
            width: 120,
            height: 120,

        },

        
        infoContainer:
        {
            // backgroundColor: 'red',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: 20,
            height: 200,
        },

        input:
        {

            backgroundColor: 'chocolate',
            color: 'white',
            height: 40,
            fontSize: 16,
            paddingHorizontal: 10,
            marginBottom: 15
        },


        button:
        {
            backgroundColor: 'red',
            paddingVertical: 10
        },

        buttonText:
        {
            textAlign: 'center',
            color: 'white',
            fontSize: 18
        }



    })



