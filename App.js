import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Main from './components/MainComponent';


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
      <Main/>
    );
   
  };
}

export default MComponent;


