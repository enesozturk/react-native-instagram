import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import { Portal } from "@gorhom/portal";
import { FlashList } from "@shopify/flash-list";
import { useHeaderHeight } from "@react-navigation/elements";

import ImageCard from "../components/ImageCard";
import { CARD_LIST_SIZE } from "../constants/ui";
import { ImageDetailsList } from "../components/ImageDetailList";
import useSWR from "swr";
import { UNSPLASH_API_URL } from "../constants/api";
import { fetcher } from "../utils/api";

type ImageResponse = {
  urls: {
    regular: string;
    small: string;
  };
  id: string;
};

type Image = {
  image: {
    url: string;
    small_url: string;
    id: string;
  };
};

type ResponseProps = {
  results: ImageResponse[];
};

const Home = ({ animatedRef, active, pageX, pageY, headerHeight }) => {
  const _headerHeight = useHeaderHeight();
  const [pageIndex, setPageIndex] = useState(2);
  const [feedData, setFeedData] = useState([]);

  const { data: unsplashData } = useSWR<ResponseProps>(
    `${UNSPLASH_API_URL}&page=${pageIndex}`,
    fetcher
  );

  const parseResponse = (data) => {
    return data?.results.map((item) => {
      return {
        image: {
          url: item.urls.small,
          small_url: item.urls.small,
          id: item.id,
        },
      };
    });
  };

  const addNewBatch = (data) => {
    const _data = feedData.concat(parseResponse(data));
    setFeedData(_data);
  };

  useEffect(() => {
    if (unsplashData?.results) {
      addNewBatch(unsplashData);
    }
  }, [unsplashData]);

  useEffect(() => {
    headerHeight.value = _headerHeight;
  }, []);

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
  );
  const keyExtractor = useCallback(({ image }) => image.id as string, []);
  const handleFetchNextBatch = useCallback(async () => {
    setPageIndex(pageIndex + 1);
  }, [pageIndex]);

  return (
    <>
      <FlashList
        numColumns={3}
        data={feedData}
        renderItem={renderItem}
        disableAutoLayout={true}
        estimatedItemSize={CARD_LIST_SIZE}
        keyExtractor={keyExtractor}
        onEndReached={handleFetchNextBatch}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
      />
      <Portal hostName="DetailsScreen">
        <ImageDetailsList
          list={feedData}
          active={active}
          headerHeight={headerHeight}
        />
      </Portal>
    </>
  );
};

export default Home;
