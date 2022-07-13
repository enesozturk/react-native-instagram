import { useAnimatedRef, useSharedValue } from 'react-native-reanimated'

const useAnimatedValues = () => {
  const animatedRef = useAnimatedRef()
  const pageX = useSharedValue(0)
  const pageY = useSharedValue(0)
  const active = useSharedValue(0)
  const headerHeight = useSharedValue(0)
  const isDetailOpen = useSharedValue(0)

  async function calculatePosition(animatedRef) {
    return new Promise((resolve, reject) => {
      if (animatedRef?.current) {
        animatedRef.current.measure((x, y, width, height, pageX, pageY) => {
          resolve({ x, y, width, height, pageX, pageY })
        })
      } else {
        reject(new Error('measure: animated ref not ready'))
      }
    })
  }

  return {
    animatedRef,
    pageX,
    pageY,
    active,
    headerHeight,
    isDetailOpen,
    calculatePosition,
  }
}

export default useAnimatedValues
