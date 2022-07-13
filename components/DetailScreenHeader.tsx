import { StyleSheet } from 'react-native'

import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DetailScreenHeader = ({ active, headerHeight }) => {
  const { top: safeAreaTop } = useSafeAreaInsets()
  console.log(headerHeight.value)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      paddingTop: safeAreaTop,
      height: headerHeight.value,
    }
  })

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Animated.Text style={styles.title}>Explore</Animated.Text>
    </Animated.View>
  )
}

export default DetailScreenHeader

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(139, 139, 139, 0.1)',
    zIndex: 999,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
  },
})
