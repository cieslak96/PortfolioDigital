"use client";
import React, { useState } from 'react';

const ThemeSwitcher = ({ initialMode = false }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialMode);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      className="fixed bottom-4 right-4 p-1  rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 border-gray-200 border shadow-md dark:shadow-white dark:hover:bg-gray-600"
      onClick={toggleTheme}
    >
      {isDarkMode ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 1V3.25M16.364 3.636L14.773 5.227M19 10H16.75M16.364 16.364L14.773 14.773M10 16.75V19M5.227 14.773L3.636 16.364M3.25 10H1M5.227 5.227L3.636 3.636M13.75 10C13.75 10.9946 13.3549 11.9484 12.6517 12.6517C11.9484 13.3549 10.9946 13.75 10 13.75C9.00544 13.75 8.05161 13.3549 7.34835 12.6517C6.64509 11.9484 6.25 10.9946 6.25 10C6.25 9.00544 6.64509 8.05161 7.34835 7.34835C8.05161 6.64509 9.00544 6.25 10 6.25C10.9946 6.25 11.9484 6.64509 12.6517 7.34835C13.3549 8.05161 13.75 9.00544 13.75 10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M20.376 14.378C19.1872 14.8734 17.9119 15.1277 16.624 15.126C11.239 15.126 6.874 10.761 6.874 5.37599C6.874 4.04599 7.14 2.77899 7.622 1.62399C5.84547 2.36511 4.32797 3.61535 3.26063 5.21725C2.19329 6.81915 1.62384 8.70107 1.624 10.626C1.624 16.011 5.989 20.376 11.374 20.376C13.2989 20.3762 15.1808 19.8067 16.7827 18.7394C18.3846 17.672 19.6349 16.1545 20.376 14.378Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
 }
    </button>
  );
};

export default ThemeSwitcher;
