import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage, TouchableOpacity, Alert } from 'react-native';
import styles, { colors } from '../styles/index.style';
import { connect } from 'react-redux';
import call from 'react-native-phone-call'

const args = {
  number: '+97450764660', // String value with the number to call
  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class Settings extends Component  {

  render() {
    return (
      <View style={styles.safeArea}>
        <Text style={{ color: 'white', textAlign: 'center', paddingVertical: '5%', fontSize: 18 }}>
          Contact Us
        </Text>
        <Text style={{ color: 'white', textAlign: 'center', paddingTop: '5%', paddingBottom: '10%', fontSize: 14 }}>
          Feel free to email us at angad17@hotmail.com.
        </Text>
        <TouchableOpacity onPress={ () => call(args) } style={{ marginVertical: '5%', backgroundColor: 'rgb(91,184,92)' }}>
          <Text style={{ color: 'white', textAlign: 'center', paddingVertical: '5%', fontSize: 18 }}>
            Call | مكالمة
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => Alert.alert('Missing Legal Info') } style={{ borderColor: colors.dullWhite, borderWidth: 1, backgroundColor: 'black' }}>
          <Text style={{ color: 'white', textAlign: 'center', paddingVertical: '5%', fontSize: 18 }}>
            Legal Disclaimer | قانوني
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}