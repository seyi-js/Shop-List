import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
const App = () => {
  const [items, setItems] = useState([
    {id: 20, text: 'Milk'},
    {id: 30, text: 'eggs'},
    {id: 50, text: 'Bread'},
    {id: 10, text: 'Butter'},
    {id: 60, text: 'Sugar'},
    {id: 84, text: 'Milo'},
    {id: 90, text: 'Hp pro'},
    {id: 79, text: 'Mac Book pro'},
    {id: 54, text: 'Dell latitute'},
  ]);

  const delItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (text === '') {
      // Alert.alert('Error', 'Please enter an item', {text: 'ok'});
      return null;
    } else {
      setItems(prevItems => {
        return [{id: 100, text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem delItem={delItem} item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b1a0a'
  },
});

export default App;
