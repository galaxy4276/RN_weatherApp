import React from 'react';
import Loading from './loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

const API_KEY = '2ba06918e6d404a91d3c76411fb92d3c';

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (err) {
      Alert.alert('위치 정보를 불러올 수 없습니다.', '옵션에서 권한을 허용해주세요.');
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;


  }
}