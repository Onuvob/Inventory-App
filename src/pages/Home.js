/*
    www.sonjoy.info
*/
import React, {Component} from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Icon, Header, Content, Container, Button, Left, Card, CardItem, Body } from 'native-base';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import { Col, Row, Grid } from 'react-native-easy-grid';


export default class Home extends Component
{
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <FontAwesome style={{color: 'red'}}>{Icons.home}</FontAwesome>
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
                
                <Content>

                    <Card transparent>
                        <CardItem style={{ backgroundColor: 'cadetblue',  margin: 5 }}>

                            <Body>
                                <Grid>
                                    <Col style={{ margin: 5}}>
                                        <TouchableOpacity style={styles.button}>

                                            <Icon style={styles.icon}>
                    
                                                <FontAwesome>{Icons.store}</FontAwesome>
                                            
                                            </Icon>

                                            <Text style={styles.buttonText}>Add Store</Text>

                                        </TouchableOpacity>
                                    </Col>
                                    <Col style={{ margin: 5}}>
                                        <TouchableOpacity style={styles.button}>

                                            <Icon style={styles.icon}>
                        
                                                <FontAwesome >{Icons.storeAlt}</FontAwesome>
                                            
                                            </Icon>

                                            <Text style={styles.buttonText}>Store Lists</Text>

                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Body>

                        </CardItem>

                        <CardItem style={{ backgroundColor: 'cadetblue', margin: 5 }}>

                            <Body>
                                <Grid>
                                    <Col style={{ margin: 5}}>
                                        <TouchableOpacity style={styles.button}>

                                            <Icon style={styles.icon}>
                        
                                                <FontAwesome >{Icons.boxOpen}</FontAwesome>
                                            
                                            </Icon>

                                            <Text style={styles.buttonText}>Add Product</Text>

                                        </TouchableOpacity>
                                    </Col>
                                    <Col style={{ margin: 5}}>
                                        <TouchableOpacity style={styles.button}>

                                            <Icon style={styles.icon}>
                        
                                                <FontAwesome >{Icons.list}</FontAwesome>
                                            
                                            </Icon>

                                            <Text style={styles.buttonText}>Product Lists</Text>

                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Body>

                        </CardItem>

                        <CardItem style={{ backgroundColor: 'cadetblue', margin: 5 }}>

                            <Body>
                                <Grid>
                                    <Col style={{ margin: 5}}>
                                        <TouchableOpacity style={styles.button}>

                                            <Icon style={styles.icon}>
                        
                                                <FontAwesome >{Icons.tag}</FontAwesome>
                                            
                                            </Icon>

                                            <Text style={styles.buttonText}>Add Categories</Text>

                                        </TouchableOpacity>
                                    </Col>
                                    <Col style={{ margin: 5}}>
                                        <TouchableOpacity style={styles.button}>

                                            <Icon style={styles.icon}>
                        
                                                <FontAwesome >{Icons.user}</FontAwesome>
                                            
                                            </Icon>

                                            <Text style={styles.buttonText}>Profile</Text>

                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </Body>

                        </CardItem>
                    </Card>

                    
                    
                </Content>
            </Container>

        )
    }
}

const styles = StyleSheet.create({

    container: 
    {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)'
            
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
    },

    icon:
    {
        textAlign: 'center',
        color: 'white',
    }

})

