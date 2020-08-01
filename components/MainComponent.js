import React,{Component} from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes'
import DishDetail from './DishdetailComponent';
import { View } from 'react-native';


export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish: null
        }
    }

     onDishSelected(dishId) {
        this.setState({selectedDish:dishId});
    } 

    render(){
        return(
           <View>
            <Menu dishes={this.state.dishes}
            onPress={(dishId)=>this.onDishSelected(dishId)}/>
          <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]} />
            </View> 
        );
    };
}

