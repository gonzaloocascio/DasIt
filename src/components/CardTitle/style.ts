import { ThemeState } from '@src/theme/types';
import styled from 'styled-components/native';

export const TitleWrapper = styled.View`
  margin-bottom: 10px;
`;

export const TitleText = styled.Text`
  margin-horizontal: 10px;
  font-weight: bold;
  color: ${(props: ThemeState) => props.theme.PRIMARY_TEXT_COLOR};
`;

export const Divider = styled.View`
  border-width: 0.6px;
  border-color: ${(props: ThemeState) => props.theme.SECONDARY_COLOR};
  margin-top: 10px;
`;
