import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { View, Platform, Image, StyleSheet } from 'react-native';
import { NavigationContainer, Screen } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Home from './HomeComponent';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';



const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const Drawer = createDrawerNavigator();

class MainNavigator extends React.Component {
    render() {
        return (

            <MenuNavigator.Navigator initialRouteName="Menu" >
                <MenuNavigator.Screen name="Menu" component={Menu}
                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: '#3f51b5'
                        },
                        headerTitleStyle: {
                            color: '#fff'
                        },
                        headerTintColor: {
                            color: '#fff'
                        },
                        headerLeft: ({ }) => (
                            <View>
                                <Icon
                                    onPress={() => navigation.toggleDrawer()}
                                    name="md-menu"
                                    size={40}
                                    color='#fff'
                                />
                            </View>
                        )
                    })} />
                <MenuNavigator.Screen name="DishDetail" component={DishDetail}
                />
            </MenuNavigator.Navigator>


        );
    }
}



class HomeStackNavigator extends React.Component {
    render() {
        return (

            <HomeNavigator.Navigator >
                <HomeNavigator.Screen name="Homely" component={Home}

                    options={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: '#3f51b5'
                        },
                        headerTitleStyle: {
                            color: '#fff'
                        },
                        headerTintColor: {
                            color: '#fff'
                        },
                        headerLeft: ({ }) => (
                            <View>
                                <Icon
                                    onPress={() => navigation.toggleDrawer()}
                                    name="md-menu"
                                    size={34}
                                    color='#fff'
                                />
                            </View>
                        )
                    })}
                />

            </HomeNavigator.Navigator>


        );
    }
}



class Main extends React.Component {



    render() {
        return (
            <NavigationContainer>


                <Drawer.Navigator initialRouteName="Home"
                    drawerStyle={{
                        backgroundColor: '#fefefe',
                        width: 240,
                    }}>
                    <Drawer.Screen name="Homes" component={HomeStackNavigator}
                    
                        options={
                            {
                                drawerIcon: ({tintColor}) => <Icon size={24} name='md-home' type='font-awesome' color={tintColor}></Icon>,
                                drawerLabel:"HoMeS"

                            }
                        }
                    />



                    <Drawer.Screen name="Menu" component={MainNavigator} 
                    options={
                        {
                            drawerIcon: ({tintColor}) => <Icon size={23} name='md-menu' type="font-awesome" color={tintColor}></Icon>
                        }
                    }
                    />
                    <Drawer.Screen name="Contact Us" component={MainNavigator}
                        options={
                            {
                                drawerIcon: ({tintColor}) => <Icon size={23} name='md-contacts' type="font-awesome" color={tintColor}></Icon>
                            }
                        }
                    />


                </Drawer.Navigator>

            </NavigationContainer>


        );
    };
}

export default Main;

