import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/store';
import { ProductType } from '@store/modules/inventory/types';
import { Text } from '@src/components';
import {
  ContentWrapper,
  RowWrapper,
  ItemWrapper,
  Thumbnail,
  ThumbnailWrapper,
  HeartWrapper,
  Purchased,
} from './styles';
import Heart from 'react-native-vector-icons/FontAwesome5';
import { updateWatchList } from '@src/store/modules/inventory/actions';

type Props = {
  product: ProductType;
  purchased: boolean;
};

const WatchListItem = ({ product, purchased }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ContentWrapper>
      <RowWrapper>
        <ThumbnailWrapper>
          <Thumbnail
            source={{ uri: product.thumbnail }}
            purchased={purchased}
          />
          {purchased && (
            <Purchased>
              <Text bold color="#404040">
                Purchased
              </Text>
            </Purchased>
          )}
        </ThumbnailWrapper>
        <ItemWrapper>
          <Text>{product.title}</Text>
          <Text numberOfLines={1}>{product.description}</Text>
          <Text medium black>
            ${product.price}
          </Text>
        </ItemWrapper>
        <HeartWrapper
          onPress={() => {
            dispatch(updateWatchList(product.id));
          }}>
          <Heart name="heart" size={25} color={'#295982'} solid />
        </HeartWrapper>
      </RowWrapper>
    </ContentWrapper>
  );
};

export default WatchListItem;
