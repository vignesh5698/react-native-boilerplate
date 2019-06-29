  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow
   */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FirstComponent from './FisrtComponent';
  export default class App extends Component{

    constructor(props){
      super(props);
      this.state={
        name: 'VIGNESH'
      }
    }

    render() {
      return (
        <View>
          <Text style={styles.welcome}>Hello Vignesh...!!</Text>
          <Text style={styles.welcome}>Hello {this.state.name}</Text>
          <FirstComponent/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'blue'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
