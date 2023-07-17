import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppDispatch } from '@src/store';
import { setPurchased } from '@src/store/modules/inventory';
import { getWatchList } from '@src/store/modules/inventory/selectors';
import { updateWatchList } from '@src/store/modules/inventory/actions';
import { ProductType } from '@src/store/modules/inventory/types';
import { FlatList } from 'react-native';
import { AirbnbRating } from '@rneui/themed';
import { Header, Text } from '@components/index';
import { MainWrapper, SafeArea } from '@components/globalStyles';
import {
  BuyButton,
  DescriptionWrapper,
  HeaderContent,
  HeartButton,
  HeartWrapper,
  ImageWrapper,
  Pages,
  Pagination,
  PaginationWrapper,
  PriceWrapper,
  ProductImage,
  RatingWrapper,
} from './styled';
import Heart from 'react-native-vector-icons/FontAwesome5';

type ParamList = {
  Product: {
    product: ProductType;
  };
};

type ProducRouteProp = RouteProp<ParamList, 'Product'>;

const ProductDetail = () => {
  const { params } = useRoute<ProducRouteProp>();
  const product: ProductType = params.product;
  const [imageList] = useState<String[]>(product.images);
  const dispatch = useDispatch<AppDispatch>();
  const watchList = useSelector(getWatchList, isEqual);
  const [watched, setWatched] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const index = watchList.findIndex(watch => watch.productId === product.id);
    setWatched(index !== -1);
  }, [watchList]);

  const renderProducts = useCallback(
    ({ item }) => (
      <ImageWrapper>
        <ProductImage source={{ uri: item }} />
      </ImageWrapper>
    ),
    [imageList],
  );

  const priceFormat = (price: number) => {
    let formatedPrice = price.toString();
    if (formatedPrice.length >= 4) {
      var dotPos = formatedPrice.length - 3;
      formatedPrice =
        formatedPrice.slice(0, dotPos) + '.' + formatedPrice.slice(dotPos);
    }
    return `$ ${formatedPrice}`;
  };

  const handleScroll = event => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const page = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentPage(page);
  };

  return (
    <MainWrapper>
      <Header title="Product Detail" />
      <SafeArea style={{ backgroundColor: 'white' }}>
        <HeaderContent>
          <RatingWrapper>
            <Text small>{product.stock} available</Text>
            <AirbnbRating
              isDisabled
              showRating={false}
              size={10}
              defaultRating={product.rating}
            />
          </RatingWrapper>
          <Text medium style={{ marginTop: 10 }}>
            {product.title}
          </Text>
          <PaginationWrapper>
            <Pagination>
              <Pages>{`${currentPage + 1}/${imageList.length}`}</Pages>
            </Pagination>
          </PaginationWrapper>
        </HeaderContent>
        <FlatList
          data={imageList}
          renderItem={renderProducts}
          onScroll={handleScroll}
          horizontal
          pagingEnabled
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <HeartWrapper>
          <Text>{product.brand}</Text>
          <HeartButton
            onPress={() => {
              dispatch(updateWatchList(product.id));
            }}>
            <Heart name="heart" size={25} color={'#295982'} solid={watched} />
          </HeartButton>
        </HeartWrapper>
        <DescriptionWrapper>
          <Text>Description:</Text>
          <Text>{product.description}</Text>
        </DescriptionWrapper>
        <PriceWrapper>
          <Text big black>
            {priceFormat(product.price)}
          </Text>
        </PriceWrapper>
        <BuyButton
          onPress={() => {
            dispatch(setPurchased({ productId: product.id }));
          }}>
          <Text bold center color="white">
            Buy
          </Text>
        </BuyButton>
      </SafeArea>
    </MainWrapper>
  );
};

export default ProductDetail;
