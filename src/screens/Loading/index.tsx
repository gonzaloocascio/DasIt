import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@src/store';
import { getProductsApi } from '@src/store/modules/inventory/actions';
import { ActivityIndicator } from 'react-native';
import { Text } from '@src/components';
import { MainWrapper, LogoWrapper } from './styles';
import { Logo } from '@assets/icons';

const Loading = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLogged } = useSelector((state: RootState) => state?.user);

  useEffect(() => {
    if (!isLogged) {
      dispatch(getProductsApi());
    }
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
