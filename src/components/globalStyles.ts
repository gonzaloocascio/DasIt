import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Logo as ImageLogo } from '@assets/icons';

export const MainWrapper = styled.View`
  flex: 1;
`;

export const MainWrapperScroll = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View.attrs({
  elevation: 12,
})`
  height: 80px;
  padding: 12px;
  justify-content: center;
  background-color: #e04138;
`;

export const HeaderText = styled.Text`
  font-size: 19px;
  text-align: ${Platform.OS === 'web' ? 'left' : 'center'};
  padding-top: ${Platform.OS === 'web' ? 6 : 0}px;
  color: #eee;
`;

export const SafeArea = styled.View`
  flex: 1;
  background-color: #eee;
  ${() => {
    return Platform.OS === 'web'
      ? `
        padding-horizontal: 5%;
      `
      : `
        padding-horizontal: 2%;
      `;
  }}
`;

export const SafeAreaScroll = styled.ScrollView`
  flex: 1;
  background-color: #eee;
  ${() => {
    return Platform.OS === 'web'
      ? `
        padding-horizontal: 5%;
      `
      : `
        padding-horizontal: 2%;
      `;
  }}
`;

type WrapperProps = {
  noPadding?: boolean;
};
export const CardWrapper = styled.View.attrs({
  elevation: 5,
})`
  margin: 10px 5px;
  background-color: white;
  padding: ${({ noPadding }: WrapperProps) => {
    return noPadding !== undefined && noPadding === true ? 0 : 10;
  }}px;
  ${() => {
    return Platform.OS === 'web'
      ? `
        border-radius: 10px;
        border-bottom-width: 0.3px;
        border-right-width: 0.3px;
        border-color: #ccc;
         `
      : `
        border-radius: 4px;
      `;
  }}
`;

export const RowWrapper = styled.View`
  flex-direction: row;
`;

type LogoProps = {
  height?: number;
  width?: number;
};

export const Logo = styled.Image.attrs({
  source: ImageLogo,
  resizeMode: 'contain',
})`
  height: ${({ height }: LogoProps) => (height ? height : 200)}px;
  width: ${({ width }: LogoProps) => (width ? width : 200)}px;
`;

export const DividerV = styled.View`
  height: 10px;
  width: 0px;
  margin-horizontal: 5px;
  border-width: 0.5px;
  border-color: gray;
`;

export const ActionWrapper = styled.TouchableOpacity`
  flex: 1;
  flex-direction: ${Platform.OS === 'web' ? 'row' : 'column'};
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  font-size: ${Platform.OS === 'web' ? 14 : 12}px;
  text-align: center;
  color: #555;
  ${() => {
    return Platform.OS === 'web'
      ? {
          fontWeight: '600',
          paddingLeft: 15,
        }
      : { marginTop: 5 };
  }}
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'gray',
})`
  font-size: ${Platform.OS === 'web' ? 16 : 12}px;
  color: gray;
  border-bottom-width: 1px;
  border-bottom-color: #dedfe3;
`;

export const TitleListWeb = styled.View`
  background-color: #fff;
  flex-direction: row;
  padding-top: 15px;
  border-bottom-width: 2px;
  padding-left: 10px;
  border-color: #eee;
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
