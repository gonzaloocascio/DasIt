import * as React from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

export const navigationRef: any = React.createRef();

export function navigate(name: any, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current.dispatch(CommonActions.goBack());
}

export function push(name: string, ...args: any[]) {
  navigationRef.current?.dispatch(StackActions.push(name, ...args));
}

export function pop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

// export const WatchlistContext = React.createContext(undefined);

// export const CollectionContext = React.createContext(undefined);
