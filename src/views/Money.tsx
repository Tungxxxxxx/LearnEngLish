import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {TouchableOpacity, Button} from 'react-native';
import {CheckAndWriteFile, DelFile, ReadFile} from '../functions/File';
import Picker from '../component/Picker';

const Money = ({navigation}) => {
  const [soTien, setSoTien] = useState('0');
  const [data, setData] = useState('0');
  useEffect(() => {
    ReadFile()
      .then(result => {
        setData(result as string);
      })
      .catch(() => {
        setData('');
      });
  }, []);
  const soTienChange = (text: string) => {
    setSoTien(text);
  };
  const checkMoneyPress = async () => {
    console.log('checkMoneyPress: ');
    await ReadFile();
  };
  const updateMoneyPress = async () => {
    console.log(soTien);
    await CheckAndWriteFile(soTien);
    setData(await ReadFile());
  };
  const DelMoneyPress = () => {
    Alert.alert('Thông báo', 'Chắc chắn muốn xóa', [
      {
        text: 'OK',
        onPress: async () => {
          await DelFile();
          setData('0');
        },
      },
      {text: 'Cancel'},
    ]);
  };
  const toMoneyLists = () => {
    navigation.navigate('MoneyLists');
  };
  return (
    <View>
      <Button title="Hiển thị danh sách" onPress={toMoneyLists} />
      <View>
        <Text>Số tiền đã tiêu tháng này:</Text>
        <Text>{data}</Text>
      </View>
      <View>
        <Picker butValue={'Chọn ngày cần nhập'} />
        <Text>Nhập số tiền:</Text>
        <TextInput style={styles.txtMoney} onChangeText={soTienChange} />
        <Button title="Lưu lại" onPress={updateMoneyPress} />
        <TouchableOpacity onPress={checkMoneyPress}>
          <Text>Check</Text>
        </TouchableOpacity>
        <Button title="Xóa dữ liệu" onPress={DelMoneyPress} />
        <TouchableOpacity onPress={DelMoneyPress}>
          <Text>Xóa dữ liệu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txtMoney: {
    width: 80,
    height: 40,
  },
});
export default Money;
