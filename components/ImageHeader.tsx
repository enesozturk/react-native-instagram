import React from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { IMAGE_HEADER_HEIGHT } from "../constants/ui";

export const ImageHeader = () => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: IMAGE_HEADER_HEIGHT,
      opacity: 1,
    };
  }, []);

  return (
    <Animated.View style={[styles.row, styles.container, animatedStyles]}>
      <Animated.View style={styles.row}>
        <View style={styles.image} />
        <Text style={styles.title}>enesozt_</Text>
      </Animated.View>
      <View style={styles.row}>
        <Pressable style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </Pressable>
        <Text style={[styles.title, { lineHeight: 12 }]}>...</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    overflow: "hidden",
    zIndex: 888,
    backgroundColor: "white",
  },
  followButton: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "rgba(0,0,0,0.05)",
    marginRight: 16,
  },
  followButtonText: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "600",
  },
  image: {
    width: 28,
    height: 28,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginRight: 8,
    borderRadius: 32,
  },
  title: {
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "600",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
