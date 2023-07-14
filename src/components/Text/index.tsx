import React from 'react';
import { Text as TextStyle } from './styles';
import { TextProps } from './props';

const Text = ({
  h1,
  h2,
  h3,
  noti,
  medium,
  big,
  center,
  bold,
  card,
  style,
  children,
  error,
  success,
  ...rest
}: TextProps) => {
  return (
    <TextStyle
      style={style}
      {...{
        h1,
        h2,
        h3,
        medium,
        big,
        center,
        bold,
        noti,
        card,
        error,
        success,
        ...rest,
      }}>
      {children}
    </TextStyle>
  );
};

export default Text;
