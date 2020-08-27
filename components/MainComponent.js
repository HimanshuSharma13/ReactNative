import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { NavigationContainer, Screen } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItems, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './HomeComponent';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {  fetchDishes } from '../redux/ActionCreator';
import {connect} from 'react-redux';
import Reservation from './ReservationComponent';



const mapStateToProps= state=>{
    return{
        dishes: state.dishes
    }
};

const mapDispatchToProps = dispatch=>(
    {
        fetchDishes:()=> dispatch(fetchDishes())
    }
);



const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require('./images/logo.png')}
                        style={styles.drawerImage} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Resteronto Confusion</Text>
                </View>
            </View>
            <DrawerItemList {...props} />

        </SafeAreaView>
    </ScrollView>
);

const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const ReserveNavigator = createStackNavigator();
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


class ReserveStackNavigator extends React.Component {
    render() {
        return (

            <ReserveNavigator.Navigator  >
                <ReserveNavigator.Screen name="Reserve Table" component={Reservation}
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
                
            </ReserveNavigator.Navigator>


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

componentDidMount(){
    this.props.fetchDishes();
};

    render() {
        return (
            <NavigationContainer>


                <Drawer.Navigator initialRouteName="Home"
                    drawerContent={props => <CustomDrawerContentComponent {...props} />}


                    drawerStyle={{
                        backgroundColor: '#fefefe',
                        width: 240,
                    }}>


                    <Drawer.Screen name="Homes" component={HomeStackNavigator}

                        options={
                            {
                                drawerIcon: ({ tintColor }) => <Icon size={24} name='md-home' type='font-awesome' color={tintColor}></Icon>,
                                drawerLabel: "HoMeS"

                            }
                        }
                    />



                    <Drawer.Screen name="Menu" component={MainNavigator}
                        options={
                            {
                                drawerIcon: ({ tintColor }) => <Icon size={23} name='md-menu' type="font-awesome" color={tintColor}></Icon>
                            }
                        }
                    />
                    <Drawer.Screen name="Contact Us" component={MainNavigator}
                        options={
                            {
                                drawerIcon: ({ tintColor }) => <Icon size={23} name='md-contacts' type="font-awesome" color={tintColor}></Icon>
                            }
                        }
                    />
                    <Drawer.Screen name="Reservation" component={ReserveStackNavigator}
                    options={
                        
                     {
                        
                         drawerIcon:({tintColor})=><Icon size={23} name='md-book' type="font-awsome" color={tintColor}></Icon>
                     }   
                    }
                    />


                </Drawer.Navigator>

            </NavigationContainer>


        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        flex: 1,
        backgroundColor: "#3f51b5",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"

    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60

    }

});

export default connect(mapStateToProps,mapDispatchToProps)(Main);

