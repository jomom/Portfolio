'use client'

import React from 'react'
import { Bot, Briefcase, Sparkles } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="text-center space-y-6 py-16">
      {/* Main heading with animation */}
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
          Full-Stack Developer
          <span className="text-2xl md:text-3xl block text-slate-300 font-semibold">
            Information Systems Practitioner & Digital Solutions Architect
          </span>
        </h1>

        <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
          Building Smart, Scalable Digital Solutions
        </p>

        <div className="absolute -top-4 -right-4">
          <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        I help startups, agencies, and enterprise teams turn ideas into
         robust, scalable applications. With expertise in React, Angular, 
         and full-stack development—backed by an information systems 
         mindset—I design and deliver tech that’s clean, efficient, and
          aligned with real business goals.
      </p>
      {/* <p>
        IS Practitioner & Full-Stack Developer
        Designing Smart, Scalable Digital Systems
        Bridging technology and business, I craft full-stack solutions 
        using React, Angular, and modern architectures. 
        With a deep understanding of information systems, I don’t just build 
        code—I solve real-world problems with strategy, structure, and 
        simplicity.
      </p> */}

      {/* CTA Buttons */}
      <div className="flex justify-center space-x-4">

        <button
          onClick={() => setActiveSection('chat')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl mx-auto"
        >
          <Bot className="w-6 h-6 group-hover:animate-bounce text-white" />

          <div className="text-left">
            <span className="block text-base sm:text-lg font-semibold">
              Try AI Assistant
            </span>
            <span className="block text-xs text-blue-100 group-hover:text-white">
              Ask anything about my skills, projects, or experience
            </span>
          </div>
        </button>



        <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center group">
          <Briefcase className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          View Projects
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover-scale">
          <div className="text-3xl font-bold text-blue-400">20+</div>
          <div className="text-gray-300">Projects Delivered</div>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover-scale">
          <div className="text-3xl font-bold text-green-400">3+</div>
          <div className="text-gray-300">Years Experience</div>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover-scale">
          <div className="text-3xl font-bold text-purple-400">100%</div>
          <div className="text-gray-300">Client Satisfaction</div>
        </div>
      </div>
    </section>
  )
}

export default Hero