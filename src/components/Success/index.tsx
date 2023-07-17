import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface SuccessProps {
  success?: string;
  error?: string;
}
const Success = ({ success, error }: SuccessProps) => {
  return (
    <>
      {success && success !== '' ? (
        <Text style={[styles.label, styles.green]}>{success}</Text>
      ) : null}
      {error && error !== '' ? (
        <Text style={[styles.label, styles.red]}>{error}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  green: {
    backgroundColor: '#30B043',
  },
  red: {
    backgroundColor: '#D21404',
  },
});

export default Success;
