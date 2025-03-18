import './App.css';
import AboutMe from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import { ConfigProvider, Divider, Space } from 'antd';
import Project from './components/project';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: '#1C1C1C',
          colorPrimary: '#1D4ED8',
          fontFamily: 'Inter'
        },
      }}>
      <Space direction='vertical' size="large" style={{ width: "100vw" }}>
        <AboutMe />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Project />
      </Space>
    </ConfigProvider>
  );
}

export default App;
