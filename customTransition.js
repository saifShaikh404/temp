import Animated from 'react-native-reanimated';

const { Easing } = Animated;

export const CustomTransition = {
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 300,
        easing: Easing.out(Easing.ease),
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
        easing: Easing.in(Easing.ease),
      },
    },
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.interpolate({
              inputRange: [0, 1],
              outputRange: [-layouts.screen.width, 0],
              extrapolate: 'clamp',
            }),
          },
        ],
      },
      backgroundColor: Animated.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(0, 0, 0, 0.5)', 'transparent'],
      }),
    };
  },
};