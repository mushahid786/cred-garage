'use client';
import { useTheme } from 'context/ThemeContext';
import React from 'react';
import LogoutButton from './LogoutButton';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Sidebar() {
  const { theme, sidebarOpen } = useTheme();
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Profile', href: '/dashboard/profile' },
    { name: 'Reward', href: '/dashboard/reward' },
    { name: 'Benefit', href: '/dashboard/benefit' },
  ];

  return (
    <aside
      className={clsx(
        `${sidebarOpen ? 'fixed hidden' : ''} top-0 left-0 h-full w-64 shadow-lg z-50 md:relative md:translate-x-0 md:shadow-none md:block font-medium`,
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-purple-500'
      )}
    >
      <div className={clsx(`${sidebarOpen ? '' : 'hidden md:flex'} flex h-14 items-center border-b px-4 justify-between`)}>
        <span className="text-lg font-semibold">Dashboard</span>
      </div>
      <nav className="flex-1 flex flex-col space-y-2 p-4">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <a key={link.href} href={link.href}>
              <div
                className={clsx(
                  'flex items-center rounded-lg px-4 py-2 transition-colors',
                  isActive
                    ? 'bg-white text-purple-700 font-semibold shadow'
                    : 'hover:bg-gray-100 text-white hover:text-black'
                )}
              >
                <span>{link.name}</span>
              </div>
            </a>
          );
        })}
      </nav>

      <div className="md:hidden p-6">
        <LogoutButton />
      </div>
    </aside>
  );
}
