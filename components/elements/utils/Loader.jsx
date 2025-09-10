'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="relative lg:text-3xl text-base">
                <p className="animate-bounce">
                    JAVIDA'25
                </p>
            </div>
        </div>
    );
} 