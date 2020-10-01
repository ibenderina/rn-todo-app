import React from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';
import {THEME} from "../theme";

export const EditModal = ({visible, onCancel}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder='Жги...'
          autocorrect={false}
          autoCapitalize='none'
          maxLength={64}/>
        <View style={styles.buttons}>
          <Button
            title='Cancel'
            onPress={onCancel}
            color={THEME.RED_COLOR}/>
          <Button
            title='Save'
            color={THEME.GREY_COLOR}/>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_BG,
    width: '80%',
    fontSize: 20,
  },
  buttons: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
