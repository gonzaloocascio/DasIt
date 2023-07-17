import React from 'react';
import { TitleWrapper, TitleText, Divider } from './style';
import { CardTitleProps } from './props';

const CardTitle = ({ title, style }: CardTitleProps) => {
  return (
    <>
      <TitleWrapper style={style}>
        <TitleText>{title}</TitleText>
        <Divider />
      </TitleWrapper>
    </>
  );
};

export default CardTitle;
