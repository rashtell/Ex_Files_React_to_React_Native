/**
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import data from '../data/courses.json';

export default class ReactCourses extends Component {
  static navigationOptions = {
    title: 'React Courses',
  }

  render() {
      const { navigate } = this.props.navigation;
      console.log(data);
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Courses
          </Text>
          <Button
            onPress={() => navigate('NativeCourses')}
            title='React Native Courses'
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
