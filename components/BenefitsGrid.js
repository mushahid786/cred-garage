"use client";
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

import { benefitsData } from "../utils/benefitsData"

export default function BenefitsGrid() {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefitsData.map((benefit, index) => (
        <motion.div
          key={benefit.id}
          className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-md hover:shadow-lg transition-shadow`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="flex items-center mb-4">
            <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-purple-900' : 'bg-purple-100'
              } mr-4`}>
              <span className="text-2xl">{benefit.icon}</span>
            </div>
            <h3 className="text-lg font-semibold">{benefit.title}</h3>
          </div>
          <p className="text-sm opacity-80 mb-4">{benefit.description}</p>
          <motion.button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
              } text-white transition-colors`}
            whileTap={{ scale: 0.95 }}
          >
            {benefit.cta}
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}