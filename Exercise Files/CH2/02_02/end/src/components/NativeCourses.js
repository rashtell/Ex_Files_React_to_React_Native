/**
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class NativeCourses extends Component {
  static navigationOptions = {
    title: 'React Native Courses',
  }

  render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native Courses
          </Text>
          <Button
            onPress={() => navigate('ReactCourses')}
            title='React Courses'
            />
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
});
