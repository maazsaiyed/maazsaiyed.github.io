import { ConfigProvider, Space } from 'antd';
import { useRef } from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Nav from './components/Nav';
import Project from './components/Project';
import Skills from './components/Skills';
import { lightTheme } from './resources/theme';
import Footer from './components/Footer';

export default function App() {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <ConfigProvider theme={lightTheme}>
      <div style={lightTheme.background}>
        <Nav aboutMeRef={aboutMeRef} skillsRef={skillsRef} experienceRef={experienceRef} projectRef={projectRef} />

        <Space direction='vertical' size="large" style={{ width: "100vw" }}>
          <Home aboutMeRef={aboutMeRef} />
          <Skills skillsRef={skillsRef} />
          <Experience experienceRef={experienceRef} />
          <Project projectRef={projectRef} />
          <Footer />
        </Space>
      </div>
    </ConfigProvider>
  );
}