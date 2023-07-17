import React from 'react';
import { Text as TextStyle, TextWrapper, Icon } from './styles';
import { TextProps } from './props';
const Text = ({
  color,
  h1,
  h2,
  h3,
  small,
  medium,
  big,
  center,
  bold,
  black,
  noti,
  card,
  style,
  children,
  error,
  success,
  icon,
  ...rest
}: TextProps) => {
  return (
    <TextWrapper>
      {icon && <Icon name={icon || ''} />}
      <TextStyle
        style={style}
        {...{
          color,
          h1,
          h2,
          h3,
          small,
          medium,
          big,
          center,
          bold,
          black,
          noti,
          card,
          error,
          success,
          ...rest,
        }}>
        {children}
      </TextStyle>
    </TextWrapper>
  );
};

export default Text;
