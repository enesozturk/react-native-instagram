import React from "react";
import { StyleSheet, View } from "react-native";

import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";

export const ImageDescriptions = () => {
  return (
    <View style={styles.column}>
      <View style={styles.row}>
        <View style={[styles.skeleton, { width: SCREEN_WIDTH / 3 }]} />
        <View style={[styles.skeleton, { width: 64 }]} />
      </View>
      <View
        style={[styles.skeleton, { width: SCREEN_WIDTH - 128, height: 16 }]}
      />
      <View
        style={[styles.skeleton, { width: SCREEN_WIDTH - 32, height: 16 }]}
      />
      <View
        style={[styles.skeleton, { width: SCREEN_WIDTH / 2, height: 16 }]}
      />
      <View
        style={[styles.skeleton, { width: SCREEN_WIDTH / 1.2, height: 16 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skeleton: {
    height: 24,
    borderRadius: 4,
    marginTop: 8,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
