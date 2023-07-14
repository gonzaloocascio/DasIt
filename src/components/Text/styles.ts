import styled from 'styled-components/native';
import { ThemeState } from '@src/theme/types';
import { TextProps } from './props';

export const Text = styled.Text.attrs({
  activeOpacity: 0.6,
})`
  font-family: ${(props: ThemeState) => props.theme.PRIMARY_FONT_FAMILY};
  color: ${(props: ThemeState) => props.theme.PRIMARY_TEXT_COLOR};
  ${(props: TextProps & ThemeState) => {
    return (
      props.h1 &&
      `
      font-family: ${props.theme.PRIMARY_FONT_FAMILY_BOLD};
      font-size: 15px;
      `
    );
  }};

  ${(props: TextProps & ThemeState) => {
    return (
      props.h2 &&
      `
      font-family: ${props.theme.PRIMARY_FONT_FAMILY_MEDIUM};
      font-size: 15px;
      margin: 10px;

      `
    );
  }};
  ${(props: TextProps & ThemeState) => {
    return (
      props.h2 &&
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
        font-size: 24px;
        margin-top: 5px;
        margin-bottom: 10px;
        margin-horizontal: 20px;

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
`;
