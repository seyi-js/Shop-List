/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/FontAwesome';
export const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);
  const clearField = () => {
    addItem(text);
    setText('');
  };
  return (
    <View>
      <TextInput
        placeholder="Add Item...."
        style={styles.input}
        value={text}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => clearField()}>
        <Text style={styles.btnText}>
          <Icons name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#fff'
  },
  btn: {
    backgroundColor: '#8f6b59',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
