/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import { ProductType } from '@store/modules/inventory/types';
import { getCategories, getProducts } from '@store/modules/inventory/selectors';
import { KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import {
  SearchHeader,
  ButtonGroup,
  CardTitle,
  LoadingIndicator,
} from '@components/index';
import ProductItem from './ProductItem';
import { MainWrapper, SafeArea, CardWrapper } from '@components/globalStyles';

const ProductList = () => {
  const [Products, setProducts] = useState<ProductType[]>([]);
  const productList = useSelector(getProducts, isEqual);
  const categoryList = useSelector(getCategories, isEqual);
  const [searchNombre, setSearchNombre] = useState('');
  const [searchCategory, setSearchcategory] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const getProductList = () => {
    setLoading(true);
    const resultado = productList.filter(
      producto =>
        producto.title.toLowerCase().includes(searchNombre.toLowerCase()) &&
        producto.category.toLowerCase().includes(searchCategory.toLowerCase()),
    );

    setProducts(resultado);
    setLoading(false);
  };

  useEffect(() => {
    getProductList();
  }, [searchNombre, searchCategory]);

  const renderProducts = useCallback(
    ({ item }) => <ProductItem key={`Item${item.ProductId}`} {...item} />,
    [productList],
  );

  return (
    <MainWrapper>
      <SearchHeader
        noBack
        onSearch={text => {
          setSearchNombre(text);
        }}
      />
      <SafeArea>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 20}>
          <ButtonGroup
            buttonList={categoryList?.map(item => item) || []}
            selectedIndex={selectedIndex}
            onPress={value => {
              setSelectedIndex(value);
              if (categoryList && categoryList[value] === 'All') {
                setSearchcategory('');
              } else {
                setSearchcategory(categoryList[value]);
              }
            }}
          />
          <CardWrapper style={{ flex: 1 }}>
            <CardTitle title="Products" />
            <FlatList
              data={Products}
              renderItem={renderProducts}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
            <LoadingIndicator loading={loading} />
          </CardWrapper>
        </KeyboardAvoidingView>
      </SafeArea>
    </MainWrapper>
  );
};

export default ProductList;
