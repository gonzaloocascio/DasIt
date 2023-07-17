import { Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ContentWrapper = styled.View.attrs({
  elevation: 0.3,
})`
  margin-vertical: ${Platform.OS === 'web' ? 5 : 1}px;
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
  flex: 6;
  align-items: flex-start;
  justify-content: center;
  padding: 5px 5px;
`;

export const HeartWrapper = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px;
`;

type ThumbnailProps = {
  purchased: boolean;
};

// export const Input = styled.TextInput.attrs((props: ThemeState) => ({
//   placeholderTextColor: props.theme.PRIMARY_TEXT_COLOR_OPAQUE,
// }))`
//   font-size: 12px;
//   color: ${(props: ThemeState) => props.theme.PRIMARY_COLOR_OPAQUE};
//   border-bottom-width: 1px;
//   border-bottom-color: ${(props: ThemeState) =>
//     props.theme.PRIMARY_COLOR_OPAQUE};
// `;

export const Thumbnail = styled.Image.attrs((props: ThumbnailProps) => ({
  resizeMode: 'center',
  opacity: props.purchased ? 0.3 : 1,
}))`
  width: 100px;
  height: 100px;
`;

export const Purchased = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
// background-color: rgba(0, 0, 0, 0.5);
// background-color: rgba(0, 0, 0, 0.3);
