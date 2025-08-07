'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">About Me</h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          I'm driven by curiosity, fueled by code, and passionate about creating meaningful solutions.
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Student</h3>
              <p className="text-gray-300">
                Currently an undergraduate at SLIIT, I'm pursuing a BSc (Hons) in Information Technology 
                and gaining valuable hands-on experience through both academic and real-world projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="p-8 text-center">
              <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Developer</h3>
              <p className="text-gray-300">
                I enjoy working across the full stack, with a growing interest in DevOps and mobile app development.
                 My focus is always on building practical solutions that make a real impact.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Collaborator</h3>
              <p className="text-gray-300">
                I thrive in team environments, collaborating, sharing ideas, and learning from others to create better, 
                smarter software together.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
