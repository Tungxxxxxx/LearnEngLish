// Speak.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PlayVideo from '../component/PlayVideo';
import {URL_5000_BAI_1} from '../common/Constant';
import {URL_5000_BAI_2} from '../common/Constant';
import {URL_5000_BAI_3} from '../common/Constant';
import {URL_5000_BAI_4} from '../common/Constant';
import {URL_5000_BAI_5} from '../common/Constant';
import {URL_5000_BAI_6} from '../common/Constant';
import {URL_5000_BAI_7} from '../common/Constant';
import {URL_5000_BAI_THI_1} from '../common/Constant';
import {URL_5000_BAI_THI_2} from '../common/Constant';
import {URL_5000_BAI_THI_3} from '../common/Constant';
import {URL_5000_BAI_THI_4} from '../common/Constant';
import {URL_5000_BAI_THI_5} from '../common/Constant';
import {URL_5000_BAI_THI_6} from '../common/Constant';
import {URL_5000_BAI_THI_7} from '../common/Constant';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';

const Speak = () => {
  const [url, setUrl] = useState(URL_5000_BAI_1);
  const lessonPress = (i: Int32) => {
    switch (i) {
      case 1:
        setUrl(URL_5000_BAI_1);
        break;
      case 2:
        setUrl(URL_5000_BAI_2);
        break;
      case 3:
        setUrl(URL_5000_BAI_3);
        break;
      case 4:
        setUrl(URL_5000_BAI_4);
        break;
      case 5:
        setUrl(URL_5000_BAI_5);
        break;
      case 6:
        setUrl(URL_5000_BAI_6);
        break;
      case 7:
        setUrl(URL_5000_BAI_7);
        break;
      default:
        break;
    }
  };
  const testsPress = (i: Int32) => {
    switch (i) {
      case 1:
        setUrl(URL_5000_BAI_THI_1);
        break;
      case 2:
        setUrl(URL_5000_BAI_THI_2);
        break;
      case 3:
        setUrl(URL_5000_BAI_THI_3);
        break;
      case 4:
        setUrl(URL_5000_BAI_THI_4);
        break;
      case 5:
        setUrl(URL_5000_BAI_THI_5);
        break;
      case 6:
        setUrl(URL_5000_BAI_THI_6);
        break;
      case 7:
        setUrl(URL_5000_BAI_THI_7);
        break;
      default:
        break;
    }
  };
  const lessons = [];
  const tests = [];
  for (let i = 1; i < 8; i++) {
    lessons.push(
      <TouchableOpacity key={'lesson' + i} onPress={() => lessonPress(i)}>
        <Text>Bai {i}</Text>
      </TouchableOpacity>,
    );
  }
  for (let i = 1; i < 8; i++) {
    tests.push(
      <TouchableOpacity key={'test-' + i} onPress={() => testsPress(i)}>
        <Text>Thi {i}</Text>
      </TouchableOpacity>,
    );
  }
  return (
    <View>
      <Text>5000 câu tiếng anh</Text>
      <View style={styles.list}>
        <View>{lessons}</View>
        <View>{tests}</View>
      </View>
      <PlayVideo url={url} />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default Speak;
