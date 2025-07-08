"use client";
import React, { useEffect, useState } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Image from 'next/image';

export default function SettingsPage() {
  const { getUser } = useKindeAuth();
  const user = getUser();
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (selectedTheme) => {
    if (selectedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-slate-700 dark:text-gray-100 transition-colors duration-300 flex flex-col">
      {/* 顶部栏 */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="flex items-center gap-3">
          {/* <Image
            src={user?.picture || '/user.png'}
            width={50}
            height={50}
            alt="user"
            className="rounded-full border border-gray-300 dark:border-gray-600"
          /> */}
          <div>
            <h2 className="text-base font-semibold">
              {user?.given_name} {user?.family_name}
            </h2>
            <h2 className="text-sm text-slate-500 dark:text-gray-400">
              {user?.email}
            </h2>
          </div>
        </div>
      </div>

      {/* 主体内容区域 */}
      <div className="flex-1 p-8 overflow-auto">
        {/* 主题设置区块 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-3">Theme</h2>
          <p className="text-base text-slate-600 dark:text-gray-300 mb-4">
            Choose your preferred theme. "System" will adapt based on your device setting.
          </p>
          <div className="w-full max-w-xs">
            <select
              value={theme}
              onChange={(e) => handleThemeChange(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 bg-white dark:bg-gray-700 text-slate-700 dark:text-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        {/* 账号设置区块（退出功能） */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-3">Account</h2>
          <p className="text-base text-slate-600 dark:text-gray-300 mb-4">
            Sign out of your Kinde account below.
          </p>
          <LogoutLink
            redirectTo="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-md text-base font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
          >
            Sign Out
          </LogoutLink>
        </div>
      </div>
    </div>
  );
}
