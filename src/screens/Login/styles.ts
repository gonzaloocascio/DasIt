import styled from 'styled-components/native';
import {
  MainWrapper as MainWrapperG,
  CardWrapper as CardWrapperG,
  Input as InputG,
} from '@components/globalStyles';
import { ThemeState } from '@src/theme/types';

export const MainWrapper = styled(MainWrapperG)`
  justify-content: flex-start;
  padding: 10% 5% 15%;
`;

export const CardWrapper = styled(CardWrapperG)`
  flex: 1;
  padding-horizontal: 30px;
`;

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex: 1.5;
  padding: 0px 30px;
  justify-content: flex-start;
`;

export const Input = styled(InputG)`
  margin: 5px 0px;
  padding: 10px 0px;
`;

export const Button = styled.Button.attrs((props: ThemeState) => ({
  color: props.theme.PRIMARY_COLOR_DARK,
}))``;
