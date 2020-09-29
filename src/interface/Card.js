import React from 'react';
import {View, StyleSheet} from 'react-native';
import {THEME} from "../theme";

export const Card = props => {
  return (
    <View style={{...styles.default, ...props.style}}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    backgroundColor: THEME.WHITE_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 8,
    borderRadius: 8,
    elevation: 8,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
});
