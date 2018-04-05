import React from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

export default Counter = ({
  opacity,
  scaleStroke,
  scaleBox,
  scaleText,
  amount,
}) => (
  <View style={styles.content}>
    <Animated.View style={[styles.stroke, { opacity },  { transform: [{ scale: scaleStroke }]}]} />
    <Animated.View style={[styles.box, { transform: [{ scale: scaleBox }]}]} />
    <Animated.Text style={[styles.text, { transform: [{ scale: scaleText }]}]}>{amount}</Animated.Text>
  </View>
)

const variables = {
  top: 57
}

const styles = StyleSheet.create({
  content: {
    paddingTop: variables.top,
  },
  box: {
    top: -31,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'black',
    zIndex: 1,
  },
  stroke: {
    top: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 1,
    opacity: 0,
  },
  text: {
    top: -variables.top,
    position: 'relative',
    zIndex: 2,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 0,
    paddingHorizontal: 15,
  }
})