import React from 'react';

export interface TextProps {
  color?: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  noti?: boolean;
  small?: boolean;
  medium?: boolean;
  big?: boolean;
  center?: boolean;
  bold?: boolean;
  black?: boolean;
  card?: boolean;
  style?: any;
  children: React.ReactNode;
  rest?: any;
  error?: boolean;
  success?: boolean;
  icon?: string;
}
