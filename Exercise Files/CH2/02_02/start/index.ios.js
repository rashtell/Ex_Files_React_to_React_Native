/**
 * @flow
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from '.src/components/App';

export default class courses extends Component {
  render() {
    return(
      <App />
    );
  }
}

AppRegistry.registerComponent('courses', () => courses);
