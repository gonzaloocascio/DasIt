import React from 'react';
import { navigate } from '@src/navigation/rootNavigation';
import { ProductType } from '@store/modules/inventory/types';
import { Text } from '@src/components';
import {
  ContentWrapper,
  RowWrapper,
  ItemWrapper,
  Thumbnail,
  ThumbnailWrapper,
} from './styles';

const ProductItem = (product: ProductType) => {
  const goDetail = () => {
    navigate('Detail', { product });
  };
  return (
    <ContentWrapper>
      <RowWrapper onPress={goDetail}>
        <ThumbnailWrapper>
          <Thumbnail source={{ uri: product.thumbnail }} />
        </ThumbnailWrapper>
        <ItemWrapper flex={7}>
          <Text>{product.title}</Text>
          <Text numberOfLines={1}>{product.description}</Text>
          <Text medium black>
            ${product.price}
          </Text>
        </ItemWrapper>
      </RowWrapper>
    </ContentWrapper>
  );
};

export default ProductItem;
