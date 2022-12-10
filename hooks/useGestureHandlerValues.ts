import { Gesture } from "react-native-gesture-handler";
import { useSharedValue, withSpring } from "react-native-reanimated";
import { SPRING_CONFIGURATION } from "../constants/animation";

const getHipotenus = (offsetX, offsetY) => {
  "worklet";
  const _offsetYValue = offsetY.value < 0 ? offsetY.value : 0;

  const distanceHipo =
    offsetX.value === 0 && offsetY.value < 0
      ? Math.abs(offsetY.value)
      : Math.round(
          Math.sqrt(
            offsetX.value * offsetX.value + _offsetYValue * _offsetYValue
          )
        );
  return Math.sqrt(
    offsetX.value * offsetX.value + offsetY.value * offsetY.value
  );
};

const useGestureHandlerValues = ({ active }) => {
  const isPressed = useSharedValue(false);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const translationY = useSharedValue(0);
  const translationYStop = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onBegin(() => {})
    .onUpdate((e) => {
      if (active) {
        offsetX.value = e.translationX + startX.value;
        offsetY.value = e.translationY + startY.value;
      }
    })
    .onEnd((e) => {
      if (active) {
        startX.value = offsetX.value;
        startY.value = offsetY.value;

        const eX = Math.round(e.velocityX);
        const eY = Math.round(e.velocityY);
        const velocityHipo = Math.round(Math.sqrt(eX * eX + eY * eY));

        offsetX.value = withSpring(1, SPRING_CONFIGURATION);
        offsetY.value = withSpring(1, SPRING_CONFIGURATION);

        const distanceHipo = getHipotenus(offsetX, offsetY);

        if (distanceHipo > 100 || velocityHipo > 500) {
          active.value = withSpring(0, SPRING_CONFIGURATION);
        }
      }
    })
    .onFinalize(() => {
      if (active) {
        isPressed.value = false;
      }
      startX.value = 0
      startY.value = 0
    });

  return {
    gesture,
    isPressed,
    offsetX,
    offsetY,
    startX,
    startY,
    translationY,
    translationYStop,
  };
};

export default useGestureHandlerValues;
