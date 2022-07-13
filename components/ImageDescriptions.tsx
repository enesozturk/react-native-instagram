import React from 'react'
import { StyleSheet, View } from 'react-native'

import { SCREEN_WIDTH } from '@gorhom/bottom-sheet'

export const ImageDescriptions = () => {
  return (
    <View style={styles.column}>
      <View style={[styles.skeleton, { width: SCREEN_WIDTH - 32 }]} />
      <View style={[styles.skeleton, { width: SCREEN_WIDTH - 64 }]} />
      <View style={[styles.skeleton, { width: SCREEN_WIDTH - 64 }]} />
      <View style={[styles.skeleton, { width: SCREEN_WIDTH - 128 }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  skeleton: {
    height: 24,
    borderRadius: 4,
    marginTop: 8,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
})
