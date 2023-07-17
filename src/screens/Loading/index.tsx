import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/index';
import { getProductsApi } from '@store/modules/inventory/actions';
import { ActivityIndicator } from 'react-native';
import { Text } from '@components/index';
import { MainWrapper, LogoWrapper } from './styles';
import { Logo } from '@assets/icons';

const Loading = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsApi());
  }, []);

  return (
    <MainWrapper>
      <LogoWrapper>
        <Logo height={250} />
        <Text>a Portfolio Proyect</Text>
      </LogoWrapper>
      <ActivityIndicator size={50} />
    </MainWrapper>
  );
};

export default Loading;
