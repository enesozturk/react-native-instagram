import React, { memo, useCallback, useMemo } from "react";

import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { SCREEN_WIDTH } from "@gorhom/bottom-sheet";
import { FlashList } from "@shopify/flash-list";
import { useDetailScreen } from "../hooks/useDetailScreen";
import { ImageHeader } from "./ImageHeader";
import { ImageDescriptions } from "./ImageDescriptions";
import ImageDetailListItem from "./ImageDetailListItem";

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

export const ImageDetailsList = ({ active }) => {
  const { imageDetailsList } = useDetailScreen();

  const memoList = useMemo(() => imageDetailsList, [imageDetailsList]);

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      width: SCREEN_WIDTH,
    };
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <Animated.View>
          <ImageHeader />
          <ImageDetailListItem animate url={item.image.url} active={active} />
          <ImageDescriptions />
        </Animated.View>
      );
    },
    [memoList]
  );

  return (
    <AnimatedFlashList
      style={animatedContainerStyles}
      data={memoList}
      renderItem={renderItem}
    />
  );
};

export default memo(ImageDetailsList);
