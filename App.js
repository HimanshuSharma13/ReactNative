import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import {connect} from 'react-redux';
import { dishes } from './redux/dishes';

const store=ConfigureStore();




// export default function App() {
//   return (
//     <View >
//       <Text>Welcome!!! Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

 class MComponent extends React.Component{
  render(){
    return (
      <Provider store={store}>
      <Main/>
      </Provider>
    
    );
   
  };
}

export default MComponent;


