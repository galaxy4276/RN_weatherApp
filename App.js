import React from 'react';
import Loading from './loading';
import * as Location from 'expo-location';
import { Alert, Text } from 'react-native';
import axios from 'axios';

const API_KEY = '2ba06918e6d404a91d3c76411fb92d3c';

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data);
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
      console.log(latitude, longitude);
      Alert.alert("성공!", "위치 정보를 성공적으로 불러왔습니다!");   
    } catch (err) {
      Alert.alert('위치 정보를 불러올 수 없습니다.', '옵션에서 권한을 허용해주세요.');
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : <Text style={{ paddingVertical: 50, fontSize: 30 }}>빈 화면</Text>;
  }
}   