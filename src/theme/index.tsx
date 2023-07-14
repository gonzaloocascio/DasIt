import { DefaultTheme } from 'react-native-paper';
import { base, lightTheme } from '@src/theme/types';

export const themeFonts = {
  regular: {
    fontFamily: lightTheme.PRIMARY_FONT_FAMILY,
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: lightTheme.PRIMARY_FONT_FAMILY_MEDIUM,
    fontWeight: 'normal',
  },
  light: {
    fontFamily: lightTheme.PRIMARY_FONT_FAMILY_LIGHT,
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: lightTheme.PRIMARY_FONT_FAMILY,
    fontWeight: 'normal',
  },
};

export const appTheme = {
  ...DefaultTheme,
  ...base,
  ...lightTheme,
  fonts: themeFonts,
  colors: {
    ...DefaultTheme.colors,
    primary: lightTheme.PRIMARY_COLOR,
    background: lightTheme.PRIMARY_BACKGROUND_COLOR,
    text: lightTheme.PRIMARY_TEXT_COLOR,
    placeholder: lightTheme.PRIMARY_TEXT_COLOR_OPAQUE,
    border: lightTheme.PRIMARY_COLOR_OPAQUE,
    card: lightTheme.PRIMARY_BACKGROUND_COLOR,
    backdrop: lightTheme.PRIMARY_BACKGROUND_COLOR,
    error: lightTheme.ERROR_COLOR,
    notification: lightTheme.SECONDARY_COLOR,
  },
  roundness: 0,
  dark: false,
};

// {"colors": {"background": "rgb(242, 242, 242)", "border": "rgb(216, 216, 216)", "card": "rgb(255, 255, 255)", "notification": "rgb(255, 59, 48)", "primary": "rgb(0, 122, 255)", "text": "rgb(28, 28, 30)"}, "dark": false}
