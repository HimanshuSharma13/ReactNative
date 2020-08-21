import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
// import {DISHES} from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { connect } from 'react-redux';
import { Loading } from './LoadingComponent';





const mapStateToProps = state => {
    console.log('HomeC: mapStateToProps' + state.dishes);
    return {
        dishes: state.dishes

    }
}

function RenderItem(props) {
    const item = props.item;
    if (props.isLoading) {
        return (
            <ScrollView>
                <Loading />
            </ScrollView>
        );
    } else if (props.errMess != null) {
        return (
            <ScrollView>
                <Text>{props.errMess}</Text>
            </ScrollView>
        );
    } else {
    if (item != null) {
        return (
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={require('./images/uthappizza.png')}>
                <Text style={{ margin: 10 }}>{item.description}</Text>
            </Card>
        );
    }
}
}

class Home extends React.Component {

    static navigationOption = {
        title: "Home"
    };
    constructor(props) {
        super(props);
        this.state = {
            // dishes:DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }
    render() {
       
            return (
                <ScrollView>
                    <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess} />
                    <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
                    <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
                </ScrollView>
            );
        



    };
}

export default connect(mapStateToProps)(Home);