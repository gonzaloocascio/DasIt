import styled from 'styled-components/native';
import { ThemeState } from '@src/theme/types';
import { TextProps } from './props';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export const Text = styled.Text.attrs({
  activeOpacity: 0.6,
})`
  font-family: ${(props: ThemeState) => props.theme.PRIMARY_FONT_FAMILY};
  color: ${(props: TextProps & ThemeState) =>
    props.black ? 'black' : props.theme.PRIMARY_TEXT_COLOR};

  ${(props: TextProps & ThemeState) => {
    return (
      props.h1 &&
      `
      font-family: ${props.theme.PRIMARY_FONT_FAMILY_BOLD};
      font-size: 20px;
      padding: 10px 0px;
      `
    );
  }};

  ${(props: TextProps & ThemeState) => {
    return (
      props.h2 &&
      `
      font-family: ${props.theme.PRIMARY_FONT_FAMILY_MEDIUM};
      font-size: 15px;
      margin: 10px 0px;

      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.h3 &&
      `
      font-family: ${props.theme.PRIMARY_FONT_FAMILY_MEDIUM};
      font-size: 12px;
      margin: 10px;

      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.center &&
      `
        align-self: center;
        text-align: center;
      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.small &&
      `
        font-size: 11px;
        color: ${props.theme.PRIMARY_TEXT_COLOR_OPAQUE};

      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.medium &&
      `
        font-size: 18px;
      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.big &&
      `
        font-size: 36px;
        margin-top: 5px;
        margin-bottom: 10px;
      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.bold &&
      `
        font-weight: bold;

      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.card &&
      `
        font-size: 30px;
        font-family: Raleway;
        font-weight: bold;
        color: white;
        text-shadow: 2px 2px 3px rgba(145,145,145,0.7);
        margin-bottom: 10px;
        padding-horizontal: 20px;

      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.noti &&
      `
        font-family: ${props.theme.PRIMARY_FONT_FAMILY_BOLD};
        font-size: 20px;
        color: white;
        background-color: blue;
      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.error &&
      `
        font-family: ${props.theme.PRIMARY_FONT_FAMILY_BOLD};
        color: white;
        background-color: red;
      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.color &&
      `
      color: ${props.color};
      `
    );
  }};
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-content: flex-start;
  align-items: center;
`;

export const Icon = styled(FontAwesome5Icon).attrs({
  color: 'grey',
  size: 12,
})`
  margin-right: 4px;
`;
