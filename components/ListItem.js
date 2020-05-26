import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
export const ListItem = ({item:{text,id}, delItem}) => {
  return (
    <TouchableOpacity style={styles.listitem}>
      <View style={styles.listitemview}>
        <Text style={styles.listitemtext}>{text}</Text>
              <Icon name='remove' size={ 18 } color="white"
                  onPress={()=>delItem(id)}
              />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listitem: {
    padding: 15,
    backgroundColor: '#8f6b59',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listitemview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listitemtext: {
    fontSize: 18,
  },
});
export default ListItem;
