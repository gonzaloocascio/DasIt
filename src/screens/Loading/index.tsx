/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { Logo } from '@assets/icons';
import { getProductsApi } from '@src/store/modules/inventory/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/store';

const Loading = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsApi());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{ alignItems: 'center' }}>
        <Logo height={250} />
        <Text style={{ color: 'gray' }}>a Portfolio Proyect</Text>
      </View>
      <ActivityIndicator size={50} />
    </View>
  );
};

export default Loading;
