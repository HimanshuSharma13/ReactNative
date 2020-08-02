import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { NavigationContainer, Screen } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';



const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const Drawer = createDrawerNavigator();

class MainNavigator extends React.Component{
    render(){
        return(
           
            <MenuNavigator.Navigator initialRouteName="Menu" >
            <MenuNavigator.Screen name="Menu" component={Menu} />
            <MenuNavigator.Screen name="DishDetail" component={DishDetail} />
        </MenuNavigator.Navigator>
        
         
        );
    }
}



class HomeStackNavigator extends React.Component{
    render(){
        return(
           
            <HomeNavigator.Navigator >
            <HomeNavigator.Screen name="Home" component={Home} />
            
        </HomeNavigator.Navigator>
        
         
        );
    }
}



class Main extends React.Component {



    render() {
        return (
            <NavigationContainer>


                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeStackNavigator} />
                    <Drawer.Screen name="Menu" component={MainNavigator}>
                       
                    </Drawer.Screen>
                </Drawer.Navigator>

            </NavigationContainer>


        );
    };
}

export default Main;

