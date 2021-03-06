import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";
import { map } from 'rsvp';

// export default class Weather extends Component {
//     render(){
//         return(
//         <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//             <View style={styles.upper}>
//                 <Ionicons color="white" size={120} name="ios-rainy"/>
//                 <Text style={styles.temp}>35°</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}>Raining like a fucker</Text>
//                 <Text style={styles.subtitle}>For more info look outside</Text>
//             </View>
//         </LinearGradient>

        
//         );
//     }
// }

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a fucker",
        subtitle: "For more info look outside",
        icon: "weather-pouring"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny as suck",
        subtitle: "Go get your ass burnt",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds in the sky",
        subtitle: "are making dark side",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "is like rain, but gay",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Mist",
        subtitle: "like small dots",
        icon: "weather-fog"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "like walls",
        icon: "weather-fog"
    }

}

function Weather({temp, weatherName}){
    console.log(weatherName)
    return (
         <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
             <View style={styles.upper}>
                 <MaterialCommunityIcons color="white" size={120} name={weatherCases[weatherName].icon}/>
                 <Text style={styles.temp}>{temp}°</Text>
             </View>
             <View style={styles.lower}>
                 <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                 <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
             </View>
         </LinearGradient>
    )
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 30
    }
})