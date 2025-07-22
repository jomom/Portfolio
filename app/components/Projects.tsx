
'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' ? (
        <main className="container mx-auto px-6">
          <Hero setActiveSection={setActiveSection} />
          <Projects />
          
          {/* Placeholder for next section */}
          <div className="text-center py-8">
            <p className="text-gray-400">Skills section coming next...</p>
          </div>
        </main>
      ) : (
        <main className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">AI Assistant</h2>
            <p className="text-gray-400 mt-4">Chat interface coming soon...</p>
          </div>
        </main>
      )}
    </div>
  )
}