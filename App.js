/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableNativeFeedback, Dimensions, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {};

  toggleUsePagingEnabled = () => {
    this.setState(oldState => ({usePagingEnabled: !oldState.usePagingEnabled}));
  }

  toggleUseSnapToInterval = () => {
    this.setState(oldState => ({useSnapToInterval: !oldState.useSnapToInterval}));
  }

  toggleUseSnapToOffsets = () => {
    this.setState(oldState => ({useSnapToOffsets: !oldState.useSnapToOffsets}));
  }

  render() {
    const {usePagingEnabled, useSnapToInterval, useSnapToOffsets} = this.state;

    const background = TouchableNativeFeedback.SelectableBackground();

    const scrollViewProps = {};
    const {width} = Dimensions.get('window');

    if (usePagingEnabled) {
      scrollViewProps.pagingEnabled = true;
    }

    if (useSnapToInterval) {
      scrollViewProps.snapToInterval = width;
    }

    if (useSnapToOffsets) {
      scrollViewProps.snapToOffsets = [0, width, width * 2, width * 3, width * 4, width * 5, width * 6, width * 7, width * 8, width * 9];
    }

    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableNativeFeedback background={background} onPress={this.toggleUsePagingEnabled}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>pagingEnabled</Text>
              <View style={[styles.indicator, usePagingEnabled ? styles.indicatorOn : styles.indicatorOff]} />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback background={background} onPress={this.toggleUseSnapToInterval}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>snapToInterval</Text>
              <View style={[styles.indicator, useSnapToInterval ? styles.indicatorOn : styles.indicatorOff]} />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback background={background} onPress={this.toggleUseSnapToOffsets} disabled>
            <View style={[styles.button, styles.buttonDisabled]}>
              <Text style={styles.buttonText}>snapToOffsets</Text>
              <View style={[styles.indicator, useSnapToOffsets ? styles.indicatorOn : styles.indicatorOff]} />
            </View>
          </TouchableNativeFeedback>
        </View>
        <ScrollView horizontal {...scrollViewProps}>
          <View style={[styles.page, {width, backgroundColor: '#660000'}]} />
          <View style={[styles.page, {width, backgroundColor: '#006600'}]} />
          <View style={[styles.page, {width, backgroundColor: '#000066'}]} />
          <View style={[styles.page, {width, backgroundColor: '#666600'}]} />
          <View style={[styles.page, {width, backgroundColor: '#660066'}]} />
          <View style={[styles.page, {width, backgroundColor: '#006666'}]} />
          <View style={[styles.page, {width, backgroundColor: '#cc0000'}]} />
          <View style={[styles.page, {width, backgroundColor: '#00cc00'}]} />
          <View style={[styles.page, {width, backgroundColor: '#0000cc'}]} />
          <View style={[styles.page, {width, backgroundColor: '#cc00cc'}]} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttons: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonDisabled: {
    opacity: 0.5
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 3
  },
  indicatorOn: {
    backgroundColor: 'green'
  },
  indicatorOff: {
    backgroundColor: 'red'
  },
  page: {
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
