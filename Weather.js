import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "집에 있어요.",
    subtitle: "밖에 나가면 최소 사망."
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "이슬비~",
    subtitle: "이슬비가 내려요 💧💧"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비가 내리는 날씨에요~ 💧💧",
    subtitle: "밖을 보세요!"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈이 주륵주륵 내립니다.",
    subtitle: "눈사람 만들러갈래~? 🤡🤡"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "미친듯이 화창한 날!",
    subtitle: "여자친구 없으세요? 🤣🤣"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "흐릿흐릿 한 날..",
    subtitle: "지루함에 유의하세요. 😉"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
};


export default function Weather({ temp, condition }) {
  return (
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer} >
          <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color='white' />
          <Text style={styles.temp} >{temp}℃</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }} >
          <View>
            <Text style={styles.title} >{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle} >{weatherOptions[condition].subtitle}</Text>
          </View>
        </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 29,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,

  }
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow', 
    'AtmoSphere', 
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
}