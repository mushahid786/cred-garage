import { useTheme } from "context/ThemeContext";
import { X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
    const { theme, isSidebarOpen, setIsSidebarOpen } = useTheme();

    return (
        <div className={`min-h-screen w-full flex ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="hidden md:block fixed top-0 left-0 h-full w-64 z-50">
                <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <motion.div
                            className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} w-64 h-full shadow-lg`}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b py-3 h-14">
                                <h2 className="text-lg font-semibold">Dashboard</h2>
                                <button onClick={() => setIsSidebarOpen(false)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <Sidebar />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="w-full md:ml-64 flex-1 h-screen overflow-y-auto relative">
                <Header />
                {/* ✅ Render page here */}
                <div className="px-4 mb-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
