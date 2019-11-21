/**
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ListView, Image, Linking } from 'react-native';
import data from '../data/courses.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const toDelete = new Set(['react']);
const newData = data.filter(obj => !toDelete.has(obj.category));
const dataSource = ds.cloneWithRows(newData);

export default class NativeCourses extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'React Native Courses',
      icon: ({ tintColor }) => (
        <Icon
          name={'settings-cell'}
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
          <Text style={styles.welcome}>React Native Courses</Text>
            <ListView
              dataSource={dataSource}
              renderRow={(rowData) =>
                <View style={[theme.cardStyle, styles.card]}>
                <Image source={{uri: rowData.image}}
                 style={theme.cardImageStyle}
                 />
                  <Text style={[theme.cardTitleStyle, styles.title]}>{rowData.title}</Text>
                  <Text style={theme.cardContentStyle}>{rowData.description}</Text>
                  <Text style={[theme.cardActionStyle, styles.action]}
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
    flexWrap: 'wrap',
    backgroundColor: '#e5e5e5',
    paddingTop: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },
  card: {
    marginTop: 10,
  },
  list: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 373,
    left: 0,
    fontSize: 15,
    backgroundColor: 'rgba(245, 252, 255, 0.60)',
  },
  action: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f5fcff'
  },
});
