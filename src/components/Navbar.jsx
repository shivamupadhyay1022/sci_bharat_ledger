import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Menu, Bell, Globe } from 'lucide-react';

function Navbar({toggleSidebar}) {
  const [theme, setTheme] = useState('light');
  const [languageOpen, setLanguageOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const languageRef = useRef();
  const userMenuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (languageRef.current && !languageRef.current.contains(e.target)) {
        setLanguageOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    html.classList.toggle('dark');
    setTheme(isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  const changeLanguage = (lang) => {
    console.log(`Language changed to: ${lang}`);
    setLanguageOpen(false);
  };

  const onMenuClick = () => {
    toggleSidebar()
  };

  return (
    <header className="border-b bg-white dark:bg-gray-900 dark:text-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-5">
          <button className=" p-2" onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white md:text-2xl">
            TheSci ERP
          </h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Dropdown */}
          <div className="relative" ref={languageRef}>
            <button className="p-2" onClick={() => setLanguageOpen(!languageOpen)}>
              <Globe className="h-5 w-5" />
            </button>
            {languageOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                <button
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => changeLanguage('en')}
                >
                  English
                </button>
                <button
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => changeLanguage('hi')}
                >
                  हिंदी (Hindi)
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button className="p-2" onClick={toggleTheme}>
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5 " />
            )}
          </button>

          {/* Notifications */}
          <button className="p-2">
            <Bell className="h-5 w-5" />
          </button>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <div
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              TS
            </div>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </button>
                <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </button>
                <button className="block w-full px-4 py-2 text-sm text-left text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
