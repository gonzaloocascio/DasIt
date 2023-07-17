import React from 'react';
import { View } from 'react-native';
import BackButton from '../BackButton';
import { Header as HeaderWrapper, HeaderText } from '@components/globalStyles';

type Props = {
  title?: string;
  noBack?: boolean;
};

const Header = ({ title, noBack }: Props) => {
  return (
    <HeaderWrapper>
      {!noBack && (
        <View style={{ flex: 1 }}>
          <BackButton />
        </View>
      )}
      <View style={{ flex: 9, paddingLeft: 20 }}>
        <HeaderText>{title}</HeaderText>
      </View>
    </HeaderWrapper>
  );
};

export default Header;
