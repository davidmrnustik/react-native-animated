import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import Counter from './Counter';

export default class App extends PureComponent {
  state = {
    scale: {
      box: new Animated.Value(0),
      text: new Animated.Value(0),
      stroke: new Animated.Value(0),
    }
  }

  doAnimation() {
    const { scale: { box, text, stroke} } = this.state;
    Animated.parallel([
      Animated.loop(
        Animated.timing(box, {
          toValue: 1,
          duration: 500,
        }),
      ),
      Animated.loop(
        Animated.timing(stroke, {
          toValue: 1,
          duration: 450,
          delay: 100
        }),
      ),
      Animated.sequence([
        Animated.spring(text, {
          toValue: 1,
          friction: 3,
        }),
        Animated.timing(text, {
          toValue: 1,
          duration: 100,
        })
      ])
    ]).start();
  }

  stopAnimation() {
    const { scale: { box, text, stroke} } = this.state;
    
    box.stopAnimation(() => box.setValue(0))
    text.stopAnimation(() => text.setValue(0))
    stroke.stopAnimation(() => stroke.setValue(0))
  }

  componentDidMount() {
    this.doAnimation();
    setTimeout(() => this.stopAnimation(), 2000);
  }
  
  render() {
    const { scale: { box, text, stroke} } = this.state;
    const scaleBox = box.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.3],
    });
    const scaleStroke = stroke.interpolate({
      inputRange: [0, 1],
      outputRange: [1.2, 1.5],
    });
    const opacityStroke = stroke.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    });
    const backgroundColorBox = box.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(0, 0, 0)', 'rgb(255, 255, 0)'],
    });
    const scaleText = text.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.25],
    })
    const colorText = box.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 255, 0)', 'rgb(0, 0, 0)'],
    });
    return (
      <View style={styles.container}>
        <Counter
          amount="10€"
          opacity={opacityStroke}
          scaleStroke={scaleStroke}
          scaleBox={scaleBox}
          scaleText={scaleText}
        />
        <Counter
          amount="1550€"
          opacity={opacityStroke}
          scaleStroke={scaleStroke}
          scaleBox={scaleBox}
          scaleText={scaleText}
        />
        <Counter
          amount="100550€"
          opacity={opacityStroke}
          scaleStroke={scaleStroke}
          scaleBox={scaleBox}
          scaleText={scaleText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})