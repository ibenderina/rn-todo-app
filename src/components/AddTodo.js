import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {THEME} from "../theme";

export const AddTodo = (props) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value);
      setValue('');
    } else {
      Alert.alert('А делать то что будем?')
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.textInput}
        onChangeText={setValue}
        value={value}
        placeholder='Чем займемся?'
        autocorrect={false}
        autoCapitalize='none'
      />
      <Button title='Add' onPress={pressHandler}/>
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  textInput: {
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_BG,
    fontSize: 20,
    padding: 10
  },
});

