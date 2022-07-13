import React from 'react'

import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'

import FastImage from 'react-native-fast-image'

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage)

export const ImageDetailListItem = ({ active, url, animate }) => {
  const animatedImageStyles = useAnimatedStyle(() => {
    return {
      width: SCREEN_WIDTH,
      height: SCREEN_WIDTH,
      marginTop: 0,
    }
  }, [active])

  return (
    <AnimatedFastImage
      style={animatedImageStyles}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  )
}

export default ImageDetailListItem
