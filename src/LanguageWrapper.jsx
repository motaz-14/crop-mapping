// LanguageWrapper.jsx
import React from 'react';
import { LanguageProvider } from '../LanguageContext';
import SideBar from './component/sidebar';
import Navbar from './component/navbar';

function LanguageWrapper() {
  return (
    <LanguageProvider>
      <div className="flex">
        <SideBar />
        <Navbar />
      </div>
    </LanguageProvider>
  );
}

export default LanguageWrapper;
