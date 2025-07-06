"use client";
import { motion } from 'framer-motion';
import { useTheme } from 'context/ThemeContext';
import {
  PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

export default function RewardsChart() {
  const { theme } = useTheme();

  const pieData = [
    { name: "Used", value: 7300 },
    { name: "Available", value: 9600 }
  ];
  const pieColors = theme === 'dark' ? ["#4B5563", "#8B5CF6"] : ["#E5E7EB", "#7C3AED"];

  const lineData = [
    { month: 'Jan', points: 2000 },
    { month: 'Feb', points: 3000 },
    { month: 'Mar', points: 4200 },
    { month: 'Apr', points: 6000 },
    { month: 'May', points: 9000 },
    { month: 'Jun', points: 12000 },
    { month: 'Jul', points: 16900 },
  ];

  const totalPoints = 16900;
  const totalUsedPoints = 7300;
  const availablePoints = 9600;
  const pointToDollar = 0.01;
  const dollarValue = (totalPoints * pointToDollar).toFixed(2);
  const totalEarnedAmount = (totalUsedPoints * pointToDollar).toFixed(2);

  return (
    <motion.div
      className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* Pie Chart */}
        <div className="w-full md:w-1/2 h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Points Summary */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <div className="text-center md:text-left">
            <motion.div
              className="text-4xl font-bold mb-1"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {totalPoints.toLocaleString()}
            </motion.div>
            <div className="text-lg mb-4">Reward Points</div>

            {/* Matrix-style breakdown */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-300">Estimated Dollar Value</div>
              <div className="text-xl font-semibold">${dollarValue} USD</div>

            </div>

            <div className="mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-300">Total Withdrawal Since 2019</div>
              <div className="text-xl font-semibold">${totalEarnedAmount} USD</div>

            </div>

            {/* Key Breakdown */}
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 mb-6 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-center items-center md:space-x-6 space-y-2 md:space-y-0">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2" />
                  <span>Available:{availablePoints.toLocaleString()} pts </span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-400 mr-2" />
                  <span>Used: {totalUsedPoints.toLocaleString()} pts</span>
                </div>
              </div>
            </div>


            <motion.button
              className={`px-6 py-3 rounded-lg font-medium ${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
                } text-white transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Redeem Points
            </motion.button>
          </div>
        </div>
      </div>

      {/* Line Chart - Points Over Time */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Points Accumulation Over Time</h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} pts ($${(value * pointToDollar).toFixed(2)})`} />
              <Line
                type="monotone"
                dataKey="points"
                stroke={theme === 'dark' ? '#8B5CF6' : '#7C3AED'}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
