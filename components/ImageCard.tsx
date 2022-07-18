import React, { memo, useCallback } from "react";
import { Pressable } from "react-native";

import Animated, { withSpring } from "react-native-reanimated";
import { CARD_LIST_SIZE } from "../constants/ui";
import ImageItem from "./ImageItem";
import { SPRING_CONFIGURATION } from "../constants/animation";
import { useDetailScreen } from "../hooks/useDetailScreen";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ImageCard = ({ image, animatedRef, pageX, pageY, active }) => {
  const { setImageDetailsList } = useDetailScreen();

  const calculatePosition = useCallback(async (_animatedRef: any) => {
    return new Promise((resolve, reject) => {
      if (_animatedRef?.current) {
        _animatedRef.current.measure((x, y, width, height, pageX, pageY) => {
          resolve({ x, y, width, height, pageX, pageY });
        });
      } else {
        reject(new Error("measure: animated ref not ready"));
      }
    });
  }, []);

  const setValues = async () => {
    setImageDetailsList([{ image }]);
    const positionValues = await calculatePosition(animatedRef);
    pageX.value = positionValues.pageX;
    pageY.value = positionValues.pageY;
    active.value = withSpring(1, SPRING_CONFIGURATION);
  };

  return (
    <>
      <AnimatedPressable ref={animatedRef} onPress={setValues}>
        <Animated.View
          style={{
            width: CARD_LIST_SIZE,
            height: CARD_LIST_SIZE,
          }}
        >
          <ImageItem active={active} url={image.url} animate={false} />
        </Animated.View>
      </AnimatedPressable>
    </>
  );
};

export default memo(ImageCard);
