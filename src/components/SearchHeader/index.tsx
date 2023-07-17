/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './styles';
import { useDebounce } from '@src/utils/useDebounce';
import BackButton from '@src/components/BackButton';
import Search from '@src/components/SearchBarList';

type Props = {
  onSearch?: (text: string) => void;
  actionComponent?: JSX.Element;
  noBack?: boolean;
};

const SearchHeader = ({ onSearch, actionComponent, noBack }: Props) => {
  const [searchNombre, setSearchNombre] = useState('');
  const debouncedText = useDebounce({ value: searchNombre, delay: 500 });

  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedText);
    }
  }, [debouncedText]);

  const Action = () => {
    return actionComponent ? actionComponent : null;
  };

  return (
    <HeaderWrapper>
      {!noBack && <BackButton />}
      <Search onChangeText={txt => setSearchNombre(txt)} value={searchNombre} />
      <Action />
    </HeaderWrapper>
  );
};

export default SearchHeader;
