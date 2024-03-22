import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {TouchableOpacity, Button} from 'react-native';
import {CheckAndWriteFile, DelFile, ReadFile} from '../functions/File';
import Picker from '../component/Picker';

const MoneyLists = () => {
  const getMoneys = () => {
    const moneysStr = ReadFile();
  };
  return (
    <View>
      <View>
        <Picker butValue={'Tìm từ ngày'} />
        <Picker butValue={'Tìm đến ngày'} />
      </View>
    </View>
  );
};
export default MoneyLists;
