import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import SelectedGame from './components/SelectedGame';

const FirstRoute = () => (
  <View style={{ backgroundColor: '#ff4081' }}>
     <SelectedGame />
  </View>
);
const SecondRoute = () => (
  <View style={{ backgroundColor: '#673ab7' }} />
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null,
      index: 0,
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
      ],
    }
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
