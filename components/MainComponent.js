import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { NavigationContainer, Screen } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const MenuNavigator = createStackNavigator();

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }


    render() {
        return (
                <NavigationContainer>
                    <MenuNavigator.Navigator >
                        <MenuNavigator.Screen name="Menu" component={Menu} />
                        <MenuNavigator.Screen name="DishDetail" component={DishDetail} />
                    </MenuNavigator.Navigator>
                    
                </NavigationContainer>
        );
    };
}

export default Main;

