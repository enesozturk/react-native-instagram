import React from 'react'
import { StyleSheet } from 'react-native'

import { PortalHost } from '@gorhom/portal'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { GestureDetector } from 'react-native-gesture-handler'

import { CARD_LIST_SIZE } from '../constants/ui'
import DetailScreenHeader from '../components/DetailScreenHeader'
import {
  IMAGE_HEADER_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../constants/ui'
import { getHipotenus } from '../utils/calculations'
import useGestureHandlerValues from '../hooks/useGestureHandlerValues'

const DetailScreen = ({ active, pageX, pageY, headerHeight }) => {
  const { gesture, offsetX, offsetY, translationY } = useGestureHandlerValues({
    active,
  })

  const animatedBackdropStyles = useAnimatedStyle(() => {
    return {
      zIndex: active.value ? 999 : -1,
      opacity: interpolate(active.value, [0, 1], [0, 1], Extrapolate.CLAMP),
    }
  }, [active])

  const animatedWrapperStyles = useAnimatedStyle(() => {
    const distanceHipo = getHipotenus(offsetX, offsetY)
    const width = SCREEN_WIDTH
    const height = interpolate(
      active.value,
      [0, 1],
      [SCREEN_WIDTH, SCREEN_HEIGHT],
      Extrapolate.CLAMP
    )
    const top = interpolate(
      active.value,
      [0, 1],
      [-CARD_LIST_SIZE + pageY.value - 2, 0],
      Extrapolate.CLAMP
    )
    const left = interpolate(
      active.value,
      [0, 1],
      [-CARD_LIST_SIZE + pageX.value - 2, 0],
      Extrapolate.CLAMP
    )

    return {
      top,
      left,
      zIndex: active.value ? 999 : -1,
      position: 'absolute',
      width,
      height,
      transform: [
        { translateX: offsetX.value },
        { translateY: offsetY.value },
        {
          scale: interpolate(
            active.value,
            [0, 1],
            [0.33, 1],
            Extrapolate.CLAMP
          ),
        },
      ],
      borderRadius: interpolate(
        distanceHipo,
        [0, 100],
        [0, 16],
        Extrapolate.CLAMP
      ),
    }
  }, [active, pageX, pageY, offsetX, offsetY, translationY])

  const animatedInnerWrapperStyles = useAnimatedStyle(() => ({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    marginTop: interpolate(
      active.value,
      [0, 1],
      [-IMAGE_HEADER_HEIGHT - headerHeight.value, 0],
      Extrapolate.CLAMP
    ),
  }))

  return (
    <>
      <Animated.View style={[styles.backdrop, animatedBackdropStyles]} />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.flatListWrapper, animatedWrapperStyles]}>
          <Animated.View style={animatedInnerWrapperStyles}>
            <DetailScreenHeader active={active} headerHeight={headerHeight} />
            <PortalHost name="DetailsScreen" />
          </Animated.View>
        </Animated.View>
      </GestureDetector>
    </>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...StyleSheet.absoluteFillObject,
  },
  flatListWrapper: {
    backgroundColor: 'white',
    overflow: 'hidden',
  },
})
