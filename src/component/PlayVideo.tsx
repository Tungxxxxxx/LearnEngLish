import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

function PlayVideo({url}) {
  return (
    <View style={styles.video}>
      <WebView
        source={{uri: url}} // Thay đổi URL tương ứng
      />
    </View>
  );
}
const styles = StyleSheet.create({
  video: {
    height: '100%',
    width: '100%',
  },
});
export default PlayVideo;
