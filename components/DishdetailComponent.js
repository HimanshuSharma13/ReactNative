import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { COMMENTS } from '../shared/comments';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {pushFavorite} from '../redux/ActionCreator'


const mapStateToProps= state=>{
    return{
        dishes: state.dishes,
        favorites: state.favorites
    }
}
const mapDispatchToProps = dispatch => ({
    pushFavorite:(dishId)=> dispatch(pushFavorite(dishId))

    

});


function RenderDish(props) {
    const dish = props.dish;
    console.log(props.dish.name+'--------------Favorite---->'+props.favorite);
    if (dish != null && props.favorite!=null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
                <Icon type='font-awesome'
                    color='#f50'
                    raised='true'
                    name={props.favorite ? 'heart' : 'heart-o'}
                    size={30}
                    onPress={() => props.favorite ? console.log('Already Favorite') : props.onPress()}
                ></Icon>
            </Card>
        );
    } else {
        return (<View></View>);
    }
}

function RenderComments(props) {
    const dish_comments = props.comments;
    const renderCommentItem = ({ item, index }) => {
        return (
            <View key={index} >
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>----{item.author}  Date: {item.date}  </Text>

            </View>
        );
    };

    return (
        <Card title="Comments">
            <FlatList
                data={dish_comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            ></FlatList>
        </Card>
    );
}

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: COMMENTS,
            
        };
    }
    static navigationOptions = {
        title: 'Dish Details'
    };

    markFavorite(dishId) {
        // this.setState({ favorites: this.state.favorites.concat(dishId) });
        this.props.pushFavorite(dishId);

    }


render() {
    // const dishId = this.props.navigation.getParam('dishId', '');
    const { dishId } = this.props.route.params;
    var arr=[];
    console.log(typeof this.props.favorites+"**"+typeof arr+"---------------------------->"+this.props.favorites);
    if(typeof this.props.favorites === "undefined"||this.props.favorites==='undefined' || this.props.favorites==='' || this.props.favorites===null)
    return null;
    else
    return (
        <ScrollView>
            <RenderDish dish={this.props.dishes.dishes[+dishId]}
                favorite={this.props.favorites.some(el => el === dishId)} 
                onPress={()=>this.markFavorite(dishId)}/>
            <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
        </ScrollView>
    );
}

}

export default connect(mapStateToProps,mapDispatchToProps)(DishDetail);