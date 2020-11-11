import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>날씨 정보를</Text>
      <Text style={styles.text}>산뜻하게 불러오는 중입니다..</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 60,
    backgroundColor: '#FDF6AA',
  },
  text: {
    color: '#2c2c2c',
    fontWeight: '600',
    fontSize: 21,
  }
});


export default Loading;