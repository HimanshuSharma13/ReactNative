import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends React.Component {

    static navigationOption = {
        title: "Home"
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>Home Component</Text>
            </View>
        );
    };
}

export default Home;