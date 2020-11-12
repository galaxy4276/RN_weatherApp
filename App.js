import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import { Alert, Text } from 'react-native';
import axios from 'axios';

const API_KEY = '2ba06918e6d404a91d3c76411fb92d3c';

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0,
    condition: "",
  };

  getWeather = async (latitude, longitude) => {
    const { data: {
      main: { temp },
      weather,
    } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, temp, condition: weather[0].main });
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      console.log(latitude, longitude);
    } catch (err) {
      Alert.alert('위치 정보를 불러올 수 없습니다.', '옵션에서 권한을 허용해주세요.');
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  } 
}   