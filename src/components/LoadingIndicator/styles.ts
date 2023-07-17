import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { ThemeState } from '@src/theme/types';

export const Wrapper = styled.View`
  padding: 0px 150px;
`;
export const Activity = styled(ActivityIndicator).attrs({
  size: 'small',
})`
  color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR};
`;
