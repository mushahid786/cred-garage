"use client";
import { motion } from 'framer-motion';
import { useTheme } from 'context/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  return (
    <div className="flex items-center space-x-4">
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        style={{height:"36px"}}
        className={`flex justify-center items-center  p-2 rounded-full ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <motion.div
            key="dark"
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            🌙
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ rotate: 30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            ☀️
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
