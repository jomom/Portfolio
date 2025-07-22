'use client'

import React from 'react'
import { Code } from "lucide-react";
import { header } from 'framer-motion/client';

interface HeaderProps{
    activeSession: string;
    setActiveSession: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({activeSession,setActiveSession}) => {
  return (
    <header  className="bg-black/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
         <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                         <Code className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">Joel Momanyi</span>
                </div>
                <nav className='flex space-x-6'>
                    <button>
                        Portfolio
                    </button>
                    <button>
                        Ai Assistant
                    </button>
                </nav>
            </div>
         </div>
    </header>
  )
}

export default Header