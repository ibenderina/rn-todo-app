import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {THEME} from "../theme";
import {Card} from "../interface/Card";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove}) => {
  const [modal, setModal] = useState(false);

  return (
    <View>
      <EditModal visible={modal} onCancel={() => setModal(false)}/>

      <Card style={styles.card}>
        <Text style={styles.text}>{todo.title}</Text>
        <View style={styles.editButton}>
          <Button title='Edit' onPress={() => setModal(true)}/>
        </View>
      </Card>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title='Back'
            onPress={goBack}
            color={THEME.GREY_COLOR}/>
        </View>
        <View style={styles.button}>
          <Button
            title='Delete'
            onPress={() => onRemove(todo.id)}
            color={THEME.RED_COLOR}/>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  button: {
    width: '40%'
  },
  text: {
    color: THEME.BLACK_COLOR,
    fontSize: THEME.HEADER_FONT_SIZE,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    width: '80%'
  },
  editButton: {
    width: '20%',
    borderWidth: 2,
    borderColor: 'grey'
  },
  card: {

  }
});
