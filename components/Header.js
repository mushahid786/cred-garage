
"use client";
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import LogoutButton from './LogoutButton';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const { setIsSidebarOpen } = useTheme();
    return (
        <>
            <header className="sticky top-0 z-10 bg-white shadow-md px-4 py-2.5 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    {/* Hamburger for mobile */}
                    <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
                        <Menu className="w-6 h-6 text-black" />
                    </button>
                    <h1 className="text-2xl font-bold text-black">CRED Garage</h1>
                </div>
                <div className='flex gap-6 items-center'>
                    <ThemeToggle />
                    <div className='hidden md:block'>
                        <LogoutButton />
                    </div>
                </div>
            </header>
        </>
    )
}