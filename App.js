  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow
   */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FirstComponent from './FisrtComponent';
import SecondComponent from './SecondComponent';
import C from './C';
  export default class App extends Component{

    constructor(props){
      super(props);
      this.state={
        name: 'VIGNESH'
      }
    }

    render() {
      return (
        <View style={styles.parentContainer}>
        <TouchableOpacity
                style={styles.opacity}
              >
          <View style={styles.container1}>
            <View>
                <Text style={styles.welcome}>Hello Vignesh From One..!!</Text>
                <Text style={styles.welcome}>Hello {this.state.name}</Text>
            </View>
            <View>
              <Text style={styles.welcome}>Hello Vignesh From Two..!!</Text>
              <Text style={styles.welcome}>Hello {this.state.name}</Text>
            </View>
          </View>
          </TouchableOpacity>
          <View style={styles.container2}>
            <FirstComponent/>
          </View>
          <View style={styles.container3}>
          <SecondComponent/>
          <C/>
          </View>
        </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    parentContainer: {
      flexDirection: 'column',
      backgroundColor: 'grey',
      flex:1
    },
    container1: {
      // flex: 2,
      flexDirection: 'row',
      height:200,
      width: 200,
      backgroundColor: 'pink',
    },
    container2: {
      // flex: 2,
      flexDirection: 'row',
      height:200,
      backgroundColor: 'red',
    },
    container3: {
      // flex: 2,
      flexDirection: 'row',
      height:50,
      backgroundColor: 'grey',
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
    opacity: {
      color: 'black'
    }
  });
