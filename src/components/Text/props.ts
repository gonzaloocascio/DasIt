import React from 'react';

export interface TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  noti?: boolean;
  medium?: boolean;
  big?: boolean;
  center?: boolean;
  bold?: boolean;
  card?: boolean;
  style?: any;
  children: React.ReactNode;
  rest?: any;
  error?: boolean;
  success?: boolean;
}
