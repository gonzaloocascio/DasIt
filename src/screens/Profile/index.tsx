import React from 'react';
import { CardTitle, Header } from '@src/components';
import {
  MainWrapper,
  SafeAreaScroll,
  CardWrapper,
  RowWrapper,
  Divider,
} from '@src/components/globalStyles';
import {
  AboutWrapper,
  Avatar,
  ContactWrapper,
  EducationSection,
  EducationWrapper,
  InfoWrapper,
  SkillImage,
  SkillsSection,
  SkillsWrapper,
  Text,
  WorkDate,
  WorkDescription,
  WorkSection,
  WorksWrapper,
} from './styles';

const Profile = () => {
  return (
    <MainWrapper>
      <Header title="Profile" noBack />
      <SafeAreaScroll>
        <CardWrapper style={{ flex: 1 }}>
          <ContactWrapper>
            <InfoWrapper>
              <Text h1>Gonzalo Lo Cascio</Text>
              <Text small>Full-Stack developer</Text>
              <Text icon="envelope">gonzalolocascio@gmail</Text>
              <Text icon="phone">{'(+54) 1171403946'}</Text>
              <Text icon="home">Buenos Aires, Argentina</Text>
            </InfoWrapper>
            <Avatar source={require('@assets/images/profile-picture.jpg')} />
          </ContactWrapper>
          <Divider />
          <SkillsWrapper>
            <SkillsSection>
              <SkillImage source={require('@assets/images/code.png')} />
              <Text>React Native</Text>
              <Text>Typescript</Text>
              <Text>Javascript</Text>
              <Text>Redux / R. Saga</Text>
              <Text>React Hooks</Text>
            </SkillsSection>
            <SkillsSection>
              <SkillImage source={require('@assets/images/design.png')} />
              <Text>Figma</Text>
              <Text>Flexbox</Text>
              <Text>UX/UI Design</Text>
              <Text>Illustrator</Text>
              <Text>Photoshop</Text>
            </SkillsSection>
            <SkillsSection>
              <SkillImage source={require('@assets/images/api.png')} />
              <Text>Node.js</Text>
              <Text>mySql</Text>
              <Text>Python</Text>
              <Text>Rest Api</Text>
              <Text>Php</Text>
            </SkillsSection>
          </SkillsWrapper>
          <WorksWrapper>
            <CardTitle title="Work experience" />
            <WorkSection>
              <WorkDate>
                <Text>Present</Text>
                <Text>2023</Text>
              </WorkDate>
              <WorkDescription>
                <Text bold>Tu Negocio Web</Text>
                <Text>
                  Company Management ERP Application. Performance enhancement
                  and optimizations, Implementation of back-end with Node.js and
                  MySQL, React Native and React application.
                </Text>
              </WorkDescription>
            </WorkSection>
            <WorkSection>
              <WorkDate>
                <Text>2023</Text>
                <Text>2020</Text>
              </WorkDate>
              <WorkDescription>
                <Text bold>TakeOff</Text>
                <Text>
                  Britbox: BBC streaming platform. React Native and Typescript
                  App Upgrade with the use of Redux Saga, Custom Hooks, Testing
                  Jest, Firebase Notifications, Native Components, Apis
                  Improvements. Tasks in a team, agile methodologies and calls
                  with bbc clients.
                </Text>
              </WorkDescription>
            </WorkSection>
            <WorkSection>
              <WorkDate>
                <Text>2020</Text>
                <Text>2016</Text>
              </WorkDate>
              <WorkDescription>
                <Text bold>Personal entrepreneurship</Text>
                <Text>
                  Smart Indoor: Full stack iOT project for greenhouse cloud
                  control, Mobile App with React Native, Typescript, Redux,
                  React Hooks, Firebase, PHP Node.js mySQL and Aws. Marketing
                  and Programming Services
                </Text>
              </WorkDescription>
            </WorkSection>
            <WorkSection>
              <WorkDate>
                <Text>2016</Text>
                <Text>2012</Text>
              </WorkDate>
              <WorkDescription>
                <Text bold>Neutronic - Electromedicine</Text>
                <Text>
                  Desktop software developer and electroencephalography
                  electronic equipment. Development of the company's web app in
                  javascript
                </Text>
              </WorkDescription>
            </WorkSection>
          </WorksWrapper>
          <EducationWrapper>
            <CardTitle title="Education" />
            <EducationSection>
              <Text h2>Data Sciece</Text>
              <Text>Henry</Text>
              <Text>Currently studying</Text>
            </EducationSection>
            <EducationSection>
              <Text h2>Back End Developer</Text>
              <Text>Platzi</Text>
              <Text>Completed in 2017</Text>
            </EducationSection>
            <EducationSection>
              <Text h2>Systems engineer</Text>
              <Text>National University of la Matanza</Text>
              <Text>Completed in 2016</Text>
            </EducationSection>
            <EducationSection>
              <Text h2>Computer Technician Bachelor</Text>
              <Text>School of technical education No. 6</Text>
              <Text>Completed in 2005</Text>
            </EducationSection>
          </EducationWrapper>
          <AboutWrapper>
            <CardTitle title="About me" />
            <Text>
              Throughout my career, I have demonstrated skills in communication,
              teamwork, and project organization. I am prepared to find
              solutions to complex problems and apply my knowledge in the
              development of web, mobile, and backend applications in different
              operating systems and languages.
            </Text>
          </AboutWrapper>
        </CardWrapper>
      </SafeAreaScroll>
    </MainWrapper>
  );
};

export default Profile;
