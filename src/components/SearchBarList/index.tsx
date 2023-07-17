/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { appTheme } from '@src/theme';

interface SearchParams {
  onChangeText?: (txt: any) => void;
  value: string;
}
const Search = ({ onChangeText, value }: SearchParams) => {
  return (
    <View style={{ flex: 9 }}>
      <SearchBar
        value={value}
        placeholder=" Search..."
        onChangeText={onChangeText}
        inputContainerStyle={{
          backgroundColor: 'white',
          borderRadius: 25,
        }}
        inputStyle={{ fontSize: 12 }}
        containerStyle={{
          backgroundColor: appTheme.PRIMARY_COLOR,
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          marginRight: 0,
        }}
      />
    </View>
  );
};

export default Search;
