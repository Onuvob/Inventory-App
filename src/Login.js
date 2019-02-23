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


                    <View style={styles.mainContainer}>

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

                            <TouchableOpacity style={styles.signButton}>

                                <Text style={styles.buttonText}>Sign Up</Text>

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
            
            
            
        },

        mainContainer: 
        {
            flex: 1,
            
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
            flex: 1,
            //backgroundColor: 'red',
            left: 0,
            right: 0, 
            padding: 20,
        },

        input:
        {
            
            backgroundColor: 'chocolate',
            borderRadius: 5,
            color: 'white',
            height: 40,
            fontSize: 16,
            paddingVertical: 25,
            paddingHorizontal: 15,
            marginBottom: 15
        },


        button:
        {
            borderRadius: 20,
            backgroundColor: 'cadetblue',
            paddingVertical: 15,
            marginBottom: 15
        },

        signButton:
        {
            borderRadius: 20,
            marginBottom: 15,
            marginTop: 40,
            backgroundColor: 'red',
            paddingVertical: 15
        },

        buttonText:
        {
            textAlign: 'center',
            color: 'white',
            fontSize: 18
        }



    })



