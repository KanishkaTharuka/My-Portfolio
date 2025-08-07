'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Home from '@/components/sections/home'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'

type Section = 'home' | 'about' | 'skills' | 'projects' | 'contact'

const fadeTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: "easeInOut" }
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>('home')
  const [isDark, setIsDark] = useState(true)

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDark ? 'dark' : ''}`}>
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: `url('${activeSection === 'home' ? '/background profile.png' : '/background.png'}')`,
        }}
      >
        <div className={`absolute inset-0 transition-colors duration-500 ${activeSection === 'home' ? 'bg-black/20' : 'bg-black/50'}`} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Theme Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-7xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                {...fadeTransition}
                className="w-full"
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav className="p-6">
          <div className="flex justify-center gap-4">
            {[
              { key: 'home', label: 'HOME' },
              { key: 'about', label: 'ABOUT' },
              { key: 'projects', label: 'PROJECTS' },
              { key: 'skills', label: 'SKILLS' },
              { key: 'contact', label: 'CONTACT' }
            ].map(({ key, label }) => (
              <Button
                key={key}
                variant={activeSection === key ? "default" : "outline"}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
                onClick={() => setActiveSection(key as Section)}
              >
                {label}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
