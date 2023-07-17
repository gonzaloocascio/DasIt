import { Text } from '@src/components';
import { ThemeState } from '@src/theme/types';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');
const percent = 0.3;

export const ImageWrapper = styled.View`
  width: ${width}px;
  height: ${height * percent}px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width}px;
  height: ${height * percent}px;
`;

export const HeaderContent = styled.View`
  padding: 15px 15px 0px 15px;
`;

export const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PaginationWrapper = styled.View`
  align-items: flex-end;
`;

export const Pagination = styled.View`
  padding: 2px 10px;
  background-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
  border-radius: 20px;
  max-width: 50px;
`;

export const Pages = styled(Text).attrs({
  small: true,
})`
  color: black;
  text-align: center;
`;

export const HeartWrapper = styled.View`
  flex-direction: row;
  padding: 15px 10px;
  justify-content: space-between;
`;

export const HeartButton = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: center;
`;

export const DescriptionWrapper = styled.View`
  margin: 15px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
`;

export const PriceWrapper = styled.View`
  padding: 0px 15px;
`;

export const BuyButton = styled.TouchableOpacity`
  width: 70%;
  heigth: 40px;
  padding: 10px 5px;
  margin: 20px 15%;
  background-color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
