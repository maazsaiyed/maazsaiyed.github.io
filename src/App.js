import { Divider, Space, Flex, Typography } from 'antd';
import './App.css';
import AboutMe from './components/about';
import Experience from './components/experience';
import NavBar from './components/nav';
import Project from './components/project';
import Skills from './components/skills';
import { useRef } from 'react';


const { Text } = Typography;

export default function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <>
      <NavBar aboutMeRef={aboutMeRef} skillsRef={skillsRef} experienceRef={experienceRef} projectRef={projectRef} />

      <Space direction='vertical' size="large" style={{ width: "100vw" }}>
        <AboutMe aboutMeRef={aboutMeRef} />
        <Skills skillsRef={skillsRef} />
        <Experience experienceRef={experienceRef} />
        <Project projectRef={projectRef} />
      </Space>
    </>
  );
}