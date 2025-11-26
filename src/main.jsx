/**
 * ملف main.jsx - نقطة الدخول الرئيسية للتطبيق
 * يربط تطبيق React مع ملف HTML الأساسي
 * يحمل المكون الرئيسي App ويطبق التنسيقات العامة
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
