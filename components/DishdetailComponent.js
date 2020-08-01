import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Card} from 'react-native-elements';


function RenderDish(props){
const dish=props.dish;
    if(props.dish!=null){
return(
<Card
featuredTitle={props.dish.name}
image={require('./images/logo.png')}>
    <Text style={{margin:10}}>
        {props.dish.description}
    </Text>
</Card>
);
    }else{
        return(<View></View>);
    }
}

function DishDetail(props){
    return(<RenderDish dish={props.dish}/>);
}

export default DishDetail;