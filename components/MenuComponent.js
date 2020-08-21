import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import {  fetchDishes } from '../redux/ActionCreator';
import {connect} from 'react-redux';
import { Loading } from './LoadingComponent';


const mapStateToProps= state=>{
    return{
       dishes:state.dishes
    }
};


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {
        const { navigate} = this.props.navigation;
        
        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={false}
                    leftAvatar={{ source: require('./images/vadonut.png') }}
                    onPress={() => navigate('DishDetail', { dishId: item.id })}
                />
            );
        };
       
        if(this.props.dishes.isLoading){
            return (
<Loading/>
            );
        }else if(this.props.dishes.errMess !=null){
            return (
<Text>{this.props.dishes.errMess}</Text>
            );
        }else{

        
        return (
            <FlatList
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}

            />
        );
        }

    };


}

export default connect(mapStateToProps)(Menu);