import React, { memo, useEffect } from 'react'

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { CARD_LIST_SIZE } from '../constants/ui'
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'

import FastImage from 'react-native-fast-image'
import { IMAGE_HEADER_HEIGHT } from '../constants/ui'

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage)

export const ImageItem = ({ active, url, animate }) => {
  const animatedImageStyles = useAnimatedStyle(() => {
    const size = interpolate(
      active.value,
      [0, 1],
      [CARD_LIST_SIZE, SCREEN_WIDTH],
      Extrapolate.CLAMP
    )
    return {
      width: animate ? size : CARD_LIST_SIZE,
      height: animate ? size : CARD_LIST_SIZE,
      marginTop: animate
        ? interpolate(
            active.value,
            [0, 1],
            [0, IMAGE_HEADER_HEIGHT],
            Extrapolate.CLAMP
          )
        : 0,
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

export default ImageItem
