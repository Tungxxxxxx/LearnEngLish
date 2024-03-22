import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Picker = ({butValue}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [txtValue, setTxtValue] = useState('');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    setTxtValue(`${day}-${month}-${year}`);
    hideDatePicker();
  };

  return (
    <View>
      <Button title={butValue} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TextInput style={styles.txtInput} value={txtValue} />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
  },
  txtInput: {
    width: '100%',
    height: 40,
    borderColor: 'red',
  },
});
export default Picker;
