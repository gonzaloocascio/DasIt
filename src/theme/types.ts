import { DefaultTheme } from 'styled-components/native';

export interface ThemeProps {
  [x: string]: any;
  FONT_SIZE_TINY: number;
  FONT_SIZE_SMALL: number;
  FONT_SIZE_MEDIUM: number;
  FONT_SIZE_LARGE: number;
  FONT_SIZE_EXTRA_LARGE: number;
  FONT_SIZE_MASSIVE: number;

  FONT_WEIGHT_LIGHT: string;
  FONT_WEIGHT_MEDIUM: string;
  FONT_WEIGHT_BOLD: string;

  PRIMARY_FONT_FAMILY: string;
  PRIMARY_FONT_FAMILY_BOLD: string;
  PRIMARY_FONT_FAMILY_LIGHT: string;
  PRIMARY_FONT_FAMILY_MEDIUM: string;

  PRIMARY_COLOR: string;
  PRIMARY_BACKGROUND_COLOR: string;

  PRIMARY_TEXT_COLOR: string;
  PRIMARY_TEXT_COLOR_LIGHT: string;
  PRIMARY_TEXT_COLOR_OPAQUE: string;

  PRIMARY_COLOR_BOLD: string;
  PRIMARY_COLOR_FAINT: string;
  PRIMARY_COLOR_LIGHT: string;
  PRIMARY_COLOR_OPAQUE: string;
  PRIMARY_FOREGROUND_COLOR: string;

  SECONDARY_COLOR_BOLD: string;
  SECONDARY_COLOR_FAINT: string;
  SECONDARY_COLOR_LIGHT: string;
  SECONDARY_COLOR: string;
  SECONDARY_FOREGROUND_COLOR: string;

  ERROR_COLOR: string;
  SUCCESS_COLOR: string;
}

export interface ThemeState {
  theme: ThemeProps;
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    FONT_SIZE_TINY: number;
    FONT_SIZE_SMALL: number;
    FONT_SIZE_MEDIUM: number;
    FONT_SIZE_LARGE: number;
    FONT_SIZE_EXTRA_LARGE: number;
    FONT_SIZE_MASSIVE: number;
    FONT_WEIGHT_LIGHT: string;
    FONT_WEIGHT_MEDIUM: string;
    FONT_WEIGHT_BOLD: string;
    PRIMARY_FONT_FAMILY: string;
    PRIMARY_FONT_FAMILY_LIGHT: string;
    PRIMARY_FONT_FAMILY_MEDIUM: string;
    PRIMARY_FONT_FAMILY_BOLD: string;
    PRIMARY_COLOR: string;
    PRIMARY_COLOR_DARK: string;
    PRIMARY_TEXT_COLOR_OPAQUE: string;
    PRIMARY_FOREGROUND_COLOR: string;
    PRIMARY_BACKGROUND_COLOR: string;
    PRIMARY_TEXT_COLOR: string;
    PRIMARY_TEXT_COLOR_LIGHT: string;
    PRIMARY_COLOR_OPAQUE: string;
    SECONDARY_COLOR: string;
    SECONDARY_FOREGROUND_COLOR: string;
    SECONDARY_COLOR_LIGHT: string;
    SECONDARY_BACKGROUND_COLOR: string;
    TERTIARY_COLOR: string;
    ERROR_COLOR: string;
    SUCCESS_COLOR: string;
  }
}

export const base = {
  FONT_SIZE_TINY: 8,
  FONT_SIZE_SMALL: 10,
  FONT_SIZE_MEDIUM_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  FONT_SIZE_EXTRA_LARGE: 22,
  FONT_SIZE_MASSIVE: 40,

  FONT_WEIGHT_LIGHT: '300',
  FONT_WEIGHT_MEDIUM: '700',
  FONT_WEIGHT_BOLD: '900',

  PRIMARY_FONT_FAMILY: 'Roboto-Regular',
  PRIMARY_FONT_FAMILY_LIGHT: 'Roboto-Light',
  PRIMARY_FONT_FAMILY_MEDIUM: 'Roboto-Medium',
  PRIMARY_FONT_FAMILY_BOLD: 'Roboto-Bold',

  SECONDARY_FONT_FAMILY: 'FrankRuhlLibre-VariableFont_wght',
};

export const lightTheme: DefaultTheme = {
  ...base,
  PRIMARY_COLOR: '#6FABD0',
  PRIMARY_BACKGROUND_COLOR: '#FFFFFF',
  PRIMARY_COLOR_OPAQUE: '#E8E8E8',
  PRIMARY_FOREGROUND_COLOR: '#000000',
  PRIMARY_COLOR_DARK: '#295982',

  PRIMARY_TEXT_COLOR: '#4E4E4E',
  PRIMARY_TEXT_COLOR_OPAQUE: '#C2C2C2',
  PRIMARY_TEXT_COLOR_LIGHT: '#000000',

  SECONDARY_COLOR: '#477977',
  SECONDARY_COLOR_LIGHT: '#B0D5C7',
  SECONDARY_BACKGROUND_COLOR: '#D7F0E9',
  SECONDARY_FOREGROUND_COLOR: '#FFFFFF',

  TERTIARY_COLOR: '#000000',

  ERROR_COLOR: '#F03F3F',
  SUCCESS_COLOR: '#009935',
};

export const darkTheme: DefaultTheme = {
  ...base,

  PRIMARY_COLOR: 'white',
  PRIMARY_TEXT_COLOR_OPAQUE: '#d1d1d1',
  PRIMARY_FOREGROUND_COLOR: '#484848',
  PRIMARY_BACKGROUND_COLOR: '#F5F5F5',

  PRIMARY_TEXT_COLOR: '#CCCCCC',
  PRIMARY_TEXT_COLOR_LIGHT: '#F7F7F7',
  PRIMARY_COLOR_OPAQUE: '#999',

  SECONDARY_COLOR: '#0D6AAf',
  SECONDARY_BACKGROUND_COLOR: '#FFFFFF',
  SECONDARY_FOREGROUND_COLOR: '#FFFFFF',
  SECONDARY_COLOR_LIGHT: '#04c3fc',

  ERROR_COLOR: '#F03F3F',
  SUCCESS_COLOR: '#009935',
  PRIMARY_COLOR_DARK: '',
  TERTIARY_COLOR: '',
};

export const colorOptions = {
  black: {
    PRIMARY_COLOR_BOLD: '#484848',
    PRIMARY_COLOR_FAINT: '#6D7278',
    PRIMARY_COLOR_LIGHT: '#EDEDED',

    SECONDARY_COLOR_BOLD: '#8B8B8B',
    SECONDARY_COLOR_FAINT: '#6D7278',
    SECONDARY_COLOR_LIGHT: '#04c3fc',
  },
};