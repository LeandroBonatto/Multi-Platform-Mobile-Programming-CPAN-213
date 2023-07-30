import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function App() {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateX.value;
    },
    onActive: (event) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value
        },
        {
        translateY: translateY.value
        },
      ],
    };
  });

  return (
    <View style={Style.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'center',
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 0, 256, 0.5)',
    borderRadius: 20,
  },
  circle: {
    width: 200,
    height: 200,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
    borderWidth: 5,
    borderColor: "rgba(0, 0, 256, 0.5)"
  },
});
