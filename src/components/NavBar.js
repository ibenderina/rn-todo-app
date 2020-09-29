import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from "../theme";

export const NavBar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.MAIN_BG,
    paddingBottom: 10
  },
  text: {
    color: THEME.WHITE_COLOR,
    fontSize: THEME.HEAD_FONT_SIZE
  }
});

