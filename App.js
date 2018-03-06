/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSettingsVisibility } from './src/actions/settings_actions';
import Navigator from './src/navigator';
import styles, { colors } from './src/styles/index.style';
import LinearGradient from 'react-native-linear-gradient';

const App = (props) => {
  cancelSettingsVisibility = () => {
    props.setSettingsVisibility(false);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'rgb(10,10,10)', height: 20 }} />
      <StatusBar barStyle={'light-content'}/>
      <Navigator screenProps={{ cancelSettingsVisibility }}/>
    </View>
  );

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSettingsVisibility }, dispatch);
}

export default connect (null, mapDispatchToProps)(App);