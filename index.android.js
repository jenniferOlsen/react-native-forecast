/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component
} from 'react-native';

import App from './app';

class forecastchick extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('testProject', () => forecastchick);
