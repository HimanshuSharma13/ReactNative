import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';



const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

 class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }


    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MenuNavigator />
            </View>
        );
    };
}

export default Main;

