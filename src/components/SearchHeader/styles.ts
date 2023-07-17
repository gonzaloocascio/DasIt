import { ThemeState } from '@src/theme/types';
import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
const screenHeight = Dimensions.get('window').height;

export const HeaderWrapper = styled.View`
  height: ${Platform.OS === 'web' ? 63 : screenHeight * 0.1}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR};
`;
