"use client";
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ProfileSummary() {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      className={`p-6 rounded-2xl ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } shadow-lg`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-xl font-bold">MK</span>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full text-gray-900">
            GOLD
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Mushahid Khan</h2>
          <p className="text-sm opacity-75">Member since 2019</p>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Level 5</span>
          <span>200 XP to next level</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <motion.div 
            className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ delay: 0.4, duration: 1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}