'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  { icon: Github, href: 'https://github.com/KanishkaTharuka', label: 'GitHub' },
  { icon: Mail, href: 'mailto:kanishkatharuka500@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'http://linkedin.com/in/kanishka-tharuka-247279309', label: 'LinkedIn' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
  }
}

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid lg:grid-cols-2 gap-50 items-center min-h-[70vh]"
    >
      {/* Left Side - Name and Social Links */}
      <div className="flex flex-col justify-center">
        <motion.div
          variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
            Kanishka<br />
            Tharuka
          </h1>
          <div className="w-20 h-1 bg-orange-500" />
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex flex-row gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Button
              key={label}
              variant="outline"
              size="lg"
              className="w-16 h-16 bg-slate-800/80 border-slate-700 hover:bg-slate-700/80 hover:border-slate-600 transition-all duration-300 group"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors" />
              </a>
            </Button>
          ))}
        </motion.div>
      </div>

      {/* Right Side - Description */}
      <motion.div
        variants={textVariants}
        className="flex flex-col justify-center text-right lg:text-right"
      >
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-4xl font-semibold text-white">
            Full-Stack Developer
          </h2>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>I'm an Information Technology student,<br /> web designer, and web developer.</p>
            {/* <p>
              Currently pursuing my Bachelor's in Information Technology while building 
              modern web applications with cutting-edge technologies.
            </p>
            
            <p>
              Passionate about creating efficient, scalable solutions and contributing 
              to open-source communities. I love turning complex problems into 
              simple, beautiful designs.
            </p>
            
            <p>
              Experienced in React, Node.js, Python, and cloud platforms. 
              Always eager to learn new technologies and collaborate on exciting projects.
            </p> */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4 lg:text-right"
          >

          <div className="flex gap-4 justify-end lg:justify-end mt-8">
            <Button
              variant="outline"
              className="bg-orange-600 hover:bg-orange-700 text-white border-orange-600 hover:border-orange-700 px-8 py-3"
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3"
            >
              View Projects
            </Button>
          </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
