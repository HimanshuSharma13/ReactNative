import React from 'react';
import {View,FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';


function Menu(props){

    const renderMenuItem=({item,index})=>{
        return(
            <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={false}  
            leftAvatar={{ source: require('./images/vadonut.png')}}
            // leftAvatar={{ source:require('./images/logo.png')}}
            onPress={()=>props.onPress(item.id)}
            />
        );
    };
    

    return(
        <FlatList
        data={props.dishes}
        renderItem={renderMenuItem}  
        keyExtractor={item=>item.id.toString()}
        
        />
    );
}

export default Menu;