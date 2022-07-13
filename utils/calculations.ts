export const getHipotenus = (offsetX, offsetY) => {
  'worklet'
  // console.log(offsetX.value, offsetY.value)
  const _offsetYValue = offsetY.value < 0 ? offsetY.value : 0

  const distanceHipo =
    offsetX.value === 0 && offsetY.value < 0
      ? Math.abs(offsetY.value)
      : Math.round(
          Math.sqrt(
            offsetX.value * offsetX.value + _offsetYValue * _offsetYValue
          )
        )
  return Math.sqrt(
    offsetX.value * offsetX.value + offsetY.value * offsetY.value
  )
}
