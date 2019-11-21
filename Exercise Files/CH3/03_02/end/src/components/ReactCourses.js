/**
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ListView, Image, TouchableOpacity, Linking } from 'react-native';
import data from '../data/courses.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const dataSource = ds.cloneWithRows(data);

export default class ReactCourses extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'React Courses',
      icon: ({ tintColor }) => (
        <Icon
          name={'home'}
          size={26}
          style={{ color: tintColor }} />
      )
    }
  }

  handleClick = (link) => {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URL: " + link);
      }
    });
  };

  render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>React Courses</Text>
            <ListView
              dataSource={dataSource}
              renderRow={(rowData) =>
                <View style={theme.cardStyle}>
                <Image source={{uri: rowData.image}}
                 style={theme.cardImageStyle}
                 />
                  <Text style={theme.cardTitleStyle}>{rowData.title}</Text>
                  <Text style={theme.cardContentStyle}>{rowData.description}</Text>
                  <Text style={theme.cardActionStyle}
                    onPress={() => {
                      this.handleClick(rowData.link)
                    }}
                  >Tap to course</Text>
                </View>
              }
             />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },
});
