import styled from 'styled-components/native';

export const ContentWrapper = styled.View.attrs({
  elevation: 0.3,
})`
  margin-vertical: 1px;
  padding: 5px 0px;
  background-color: white;
`;

export const RowWrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 5px;
`;

export const ThumbnailWrapper = styled.View`
  flex: 3;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ItemWrapper = styled.View`
  flex: 7;
  align-items: flex-start;
  justify-content: center;
  padding: 5px 5px;
`;

export const Thumbnail = styled.Image.attrs({
  resizeMode: 'center',
})`
  width: 100px;
  height: 100px;
`;
