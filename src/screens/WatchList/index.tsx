import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import {
  getProducts,
  getWatchList,
} from '@src/store/modules/inventory/selectors';
import { FlatList } from 'react-native';
import { CardTitle, Header } from '@src/components';
import WatchListItem from './WatchListItem';
import {
  CardWrapper,
  MainWrapper,
  SafeArea,
} from '@src/components/globalStyles';

const WatchList = () => {
  const productList = useSelector(getProducts, isEqual);
  const watchList = useSelector(getWatchList, isEqual);

  const renderProducts = useCallback(
    ({ item }) => {
      const watched = productList.filter(watch => watch.id === item?.productId);
      return (
        <WatchListItem
          key={`Item${item}`}
          product={watched[0]}
          purchased={item?.purchased}
        />
      );
    },
    [productList, watchList],
  );

  return (
    <MainWrapper>
      <Header title="Watch List" noBack />
      <SafeArea>
        <CardWrapper style={{ flex: 1 }}>
          <CardTitle title="Watched" />
          <FlatList
            data={watchList}
            renderItem={renderProducts}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </CardWrapper>
      </SafeArea>
    </MainWrapper>
  );
};

export default WatchList;
