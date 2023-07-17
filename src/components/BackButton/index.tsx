import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { BackIcon } from '@assets/icons';
import { goBack } from '@navigation/rootNavigation';

type Props = {
  onBack?: () => void;
};

const BackButton = ({ onBack }: Props) => {
  const onGoBack = () => {
    if (onBack) {
      onBack();
    }
    goBack();
  };
  return (
    <TouchableOpacity onPress={onGoBack} style={styles.backBtn}>
      <BackIcon heigth={10} width={10} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BackButton;
