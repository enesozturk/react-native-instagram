import { Dimensions, PixelRatio } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height

export const IMAGE_HEADER_HEIGHT = 44

export const CARD_LIST_SIZE = PixelRatio.roundToNearestPixel(
  SCREEN_WIDTH / 3 - 1
)
