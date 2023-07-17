import React from 'react';
import { Activity, Wrapper } from './styles';

type LoadingParams = {
  loading?: boolean;
};

const LoadingIndicator = ({ loading }: LoadingParams) => {
  return (
    <>
      {loading ? (
        <Wrapper>
          <Activity size="small" />
        </Wrapper>
      ) : null}
    </>
  );
};
//color="#F2994B"
export default LoadingIndicator;
