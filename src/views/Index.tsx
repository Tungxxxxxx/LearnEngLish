import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

const Index = ({navigation}) => {
  const handleSpeakPress = () => {
    navigation.navigate('Speak');
  };
  const handleMoneyPress = () => {
    navigation.navigate('Money');
  };
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={handleSpeakPress}>
          <Text>Speak</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Listen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMoneyPress}>
          <Text>Tiêu tiền</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
