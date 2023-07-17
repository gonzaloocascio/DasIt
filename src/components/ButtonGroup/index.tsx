import React from 'react';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { ButtonGroup as ButtonsList } from '@rneui/themed';
import { CardWrapper } from '@components/globalStyles';

interface ButtonsParamas {
  buttonList: string[];
  onPress?: (value: any) => void;
  selectedIndex?: number;
}

const ButtonGroup = ({
  buttonList,
  onPress,
  selectedIndex,
}: ButtonsParamas) => {
  return (
    <CardWrapper noPadding>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <ButtonsList
          buttons={buttonList.map(item => item)}
          selectedIndex={selectedIndex}
          onPress={value => {
            onPress ? onPress(value) : undefined;
          }}
          containerStyle={styles.filterContainer}
          buttonContainerStyle={styles.filterButtonContainer}
          buttonStyle={styles.filterButton}
          textStyle={styles.filterText}
          selectedButtonStyle={styles.filterButtonSel}
          selectedTextStyle={styles.filterButtonText}
        />
      </ScrollView>
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  filterText: {
    fontSize: 12,
  },
  filterContainer: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 10,
  },
  filterButtonContainer: {
    borderColor: 'transparent',
    paddingHorizontal: 0,
    margin: 0,
  },
  filterButton: {
    paddingHorizontal: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    marginHorizontal: 4,
    marginVertical: 6,
  },
  filterButtonSel: { backgroundColor: '#295982' },
  filterButtonText: { color: '#fff' },
});

export default ButtonGroup;
