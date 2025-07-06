'use client';

import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';


export default function LandingPage() {
    const router = useRouter();

    return (
        <div className={`bg-gradient-to-r flex from-purple-500 min-h-screen flex items-center justify-center px-4`}>
            <div className="text-center max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">Welcome to CRED Garage Inspired Dashboard</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
                    Your one-stop dashboard for managing rewards, benefits, and profile insights — all in one place.
               Home </p>
                <Button
                    onClick={() => router.push('/dashboard')}
                    className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
                >
                    <span className='flex items-center justify-center gap-2'>
                        <Rocket className="w-5 h-5 text-indigo-600 animate-bounce" />
                        Ready to Go!
                    </span>
                </Button>
            </div>
        </div>
    );
}
