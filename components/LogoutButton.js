
"use client";
import { motion } from 'framer-motion';
import { useTheme } from 'context/ThemeContext';
import { useRouter } from 'next/router';

export default function LogoutButton() {
    const { theme } = useTheme();
    const router = useRouter();
    const handleLogout = () => {
        // Clear local/session storage if needed
        // localStorage.removeItem("token");
        router.push('/'); // Redirect to landing page
    };

    return (
        <>
            {/* Logout Button */}
            < motion.button
                onClick={handleLogout}
                style={{
                    "height": "36px"
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${theme === 'dark'
                    ? 'bg-gray-700 text-white hover:bg-gray-700'
                    : 'bg-gray-400 text-white hover:bg-gray-600'
                    }`
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Logout
            </motion.button >
        </>
    )
}