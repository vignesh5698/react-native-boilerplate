import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';

export default class FirstComponent extends Component {
    state = { 
        message: this.props.message
     }

     static defaultProps = {
         message: 'Hello.. Here No Props...'
     }

    render() { 
        return ( 
            <View>
                <Text style={styles.text1}>Hello From Component</Text>
                <Text>{this.state.message}</Text>
            </View>
         );
    }
}

const styles=StyleSheet.create({
    text1: {
        color:'red',
        backgroundColor: 'yellow'
    }
})
AppRegistry.registerComponent('FirstComponent', () => FirstComponent)