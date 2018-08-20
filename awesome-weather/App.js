import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "73a51e35744fc312634f1f075e619e93";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude)
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error:error
        });
      }
    );
  }
  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      });
    })
    .catch(error => console.log({error}))
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        {isLoaded ? (<Weather temp={Math.ceil(temperature - 273.15)} weatherName={name}/>) 
        : (
          <View style={styles.loading}>
          {error ? <Text style={styles.errorText}>{error}</Text> 
          : <Text style={styles.loadingText}>Getting the awesome weather</Text>}
          

        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 20
  },
  loadingText: {
    fontSize: 35,
    marginBottom: 40
  },
  errorText: {
    fontSize: 35,
    marginBottom: 40
  }
});
