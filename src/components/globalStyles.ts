import { ThemeState } from '@src/theme/types';
import styled from 'styled-components/native';

export const MainWrapper = styled.View`
  flex: 1;
`;

export const MainWrapperScroll = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View.attrs({
  elevation: 12,
})`
  flex-direction: row;
  height: 80px;
  padding: 12px 0px;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR};
`;

export const HeaderText = styled.Text`
  font-size: 19px;
  padding-top: 0px;
  color: ${(props: ThemeState) => props.theme.PRIMARY_TEXT_COLOR_LIGHT};
`;

export const SafeArea = styled.View`
  flex: 1;
  background-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
`;

export const SafeAreaScroll = styled.ScrollView`
  flex: 1;
  background-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
  padding-horizontal: 2%;
`;

type WrapperProps = {
  noPadding?: boolean;
};
export const CardWrapper = styled.View.attrs({
  elevation: 5,
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
})`
  margin: 10px 5px;
  background-color: ${(props: ThemeState) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: ${({ noPadding }: WrapperProps) => {
    return noPadding !== undefined && noPadding === true ? 0 : 10;
  }}px;
  border-radius: 4px;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
`;

export const Divider = styled.View`
  height: 1px;
  width: 80%;
  margin: 10px 10%;
  border-width: 0.5px;
  border-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
`;

export const ActionWrapper = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
  margin-top: 5px;
`;

export const Input = styled.TextInput.attrs((props: ThemeState) => ({
  placeholderTextColor: props.theme.PRIMARY_TEXT_COLOR_OPAQUE,
}))`
  font-size: 12px;
  color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
  border-bottom-width: 1px;
  border-bottom-color: ${(props: ThemeState) =>
    props.theme.PRIMARY_COLOR_OPAQUE};
`;

export const TitleListWeb = styled.View`
  background-color: ${(props: ThemeState) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  flex-direction: row;
  padding-top: 15px;
  border-bottom-width: 2px;
  padding-left: 10px;
  border-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
  padding-bottom: 10px;
`;

type ItemProps = {
  ratio?: number;
};

export const ItemWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-basis: ${({ ratio }: ItemProps) => {
    return ratio ? ratio : 50;
  }}%;
  align-items: center;
  justify-content: flex-start;
`;
