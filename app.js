import React from 'react-native';

let { View, Text, StyleSheet, Image } = React;
var API_Key = require('./config');
var getImage = require('./getImage');

var App = React.createClass({
  getInitialState: function() {
    return {
      summary: '',
      temp: '',
      humidity: '',
      wind: ''
    }
  },
  componentWillMount: function() {
    fetch('https://api.forecast.io/forecast/' + API_Key + '/45.5200,-122.6819')
     .then(res => res.json())
     .then(data => {
        this.setState({
          temp: data.currently.temperature,
          humidity: data.currently.humidity,
          summary: data.currently.summary,
          wind: data.currently.windSpeed,
          icon: data.currently.icon,
          loading: false
        })
     })
  },

  render: function() {

    if(this.state.loading) {
      return(
        <View style={[styles.half, styles.vertical, styles.center]}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={[styles.half, styles.center, styles.vertical]}>
          <Image source={getImage(this.state.icon)} />
          <Text style={styles.text}>{this.state.summary}</Text>
        </View>
        <View style={[styles.half, styles.center]}>
          <Text style={styles.text}>Temperature: {this.state.temp}°</Text>
          <Text style={styles.text}>Humidity: {this.state.humidity}</Text>
          <Text style={styles.text}>Wind Speed: {this.state.wind}</Text>
        </View>
      </View>
    );
  }
})

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#39A0ED",
    flex: 1
  },
  half: {
    flex: 1
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
    color: '#fff'
  },
  center: {
    alignItems: 'center',
  },
  vertical: {
    justifyContent: 'center'
  }
})

export default App;