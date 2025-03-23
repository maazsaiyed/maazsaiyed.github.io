import React from 'react';
import ReactDOM from 'react-dom/client';
import 'animate.css';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
      theme={{
        token: {
          colorText: '#1C1C1C',
          colorPrimary: '#1D4ED8',
          fontFamily: 'Inter'
        },
      }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ConfigProvider>
);