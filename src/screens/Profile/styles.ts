import { ThemeState } from '@src/theme/types';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import { Text as TextG } from '@src/components';

export const Avatar = styled(Image).attrs((props: ThemeState) => ({
  resizeMode: 'cover',
  borderColor: props.theme.PRIMARY_COLOR_DARK,
}))`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  border-width: 3px;
`;
export const Text = styled(TextG)`
  line-height: 22px;
`;

export const ContactWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0px;
`;

export const InfoWrapper = styled.View`
  padding: 10px 0px;
`;

export const SkillsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0px;
`;

export const SkillsSection = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const SkillImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 60px;
  height: 60px;
`;
export const WorksWrapper = styled.View`
  justify-content: space-between;
  margin: 30px 0px;
`;

export const WorkSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const WorkDate = styled.View`
  flex: 3;
`;
export const WorkDescription = styled.View`
  flex: 7;
`;
export const EducationWrapper = styled.View`
  justify-content: space-between;
`;
export const EducationSection = styled.View`
  margin-bottom: 20px;
  padding: 0px 20px;
`;
export const AboutWrapper = styled.View`
  justify-content: space-between;
  margin: 20px 0px;
`;
