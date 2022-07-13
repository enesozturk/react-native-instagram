import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'

import { Portal } from '@gorhom/portal'
import { FlashList } from '@shopify/flash-list'
import { useHeaderHeight } from '@react-navigation/elements'

import ImageCard from '../components/ImageCard'
import { FEED_DATA, fetchNextBatch } from '../constants/feed'
import { CARD_LIST_SIZE } from '../constants/ui'
import { ImageDetailsList } from '../components/ImageDetailList'

const Home = ({ animatedRef, active, pageX, pageY, headerHeight }) => {
  const _headerHeight = useHeaderHeight()
  const [data, setData] = useState(FEED_DATA)

  useEffect(() => {
    headerHeight.value = _headerHeight
  }, [])

  const renderItem = useCallback(
    ({ item, index }) => (
      <ImageCard
        {...{
          index,
          animatedRef,
          active,
          pageX,
          pageY,
          image: item.image,
        }}
      />
    ),
    []
  )
  const keyExtractor = useCallback(({ image }) => image.id as string, [])
  const handleFetchNextBatch = useCallback(async () => {
    const data = await fetchNextBatch()
    setData((prevData) => [...prevData, ...data])
  }, [])

  return (
    <>
      <FlashList
        numColumns={3}
        data={data}
        renderItem={renderItem}
        disableAutoLayout={true}
        estimatedItemSize={CARD_LIST_SIZE}
        keyExtractor={keyExtractor}
        onEndReached={handleFetchNextBatch}
        ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
      />
      <Portal hostName="DetailsScreen">
        <ImageDetailsList
          list={data}
          active={active}
          headerHeight={headerHeight}
        />
      </Portal>
    </>
  )
}

export default Home
