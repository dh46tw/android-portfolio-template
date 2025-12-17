import React from 'react';
import ReactDOM from 'react-dom/client';
import { html } from 'htm/react';
import App from './App.js';
import { ThemeProvider } from './context/ThemeContext.js';
import { siteConfig } from './config.js';
import { themes } from './themes.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// 根據 config 選擇主題，若無則預設為 android
const selectedTheme = themes[siteConfig.theme] || themes.android;

// 輔助函式：將顏色物件轉換為 CSS 變數賦值字串
const generateCssVariables = (palette) => {
  let css = '';
  if (palette?.primary) {
    Object.entries(palette.primary).forEach(([shade, value]) => {
      css += `--color-primary-${shade}: ${value};`;
    });
  }
  if (palette?.accent) {
    Object.entries(palette.accent).forEach(([shade, value]) => {
      css += `--color-accent-${shade}: ${value};`;
    });
  }
  return css;
};

// 動態建立 Style 標籤來定義 CSS 變數
const styleTag = document.createElement('style');
styleTag.id = 'theme-colors-config';
styleTag.innerHTML = `
  :root {
    ${generateCssVariables(selectedTheme.light)}
  }
  .dark {
    ${generateCssVariables(selectedTheme.dark)}
  }
`;
document.head.appendChild(styleTag);

const root = ReactDOM.createRoot(rootElement);
root.render(
  html`
    <${React.StrictMode}>
      <${ThemeProvider}>
        <${App} />
      <//>
    <//>
  `
);