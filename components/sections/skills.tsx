'use client'

import { motion } from 'framer-motion'
import { Code, BookOpen, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skills = {
  programming: ["JavaScript", "Java", "Python", "Kotlin", "React", "next.js", "Node.js", "Express", "HTML", "CSS", "Tailwind CSS"],
  tools: ["Git", "GitHub", "Docker", "Jenkins", "MongoDB", "MySQL"],
  devops: ["CI/CD", "GitHub Actions", "Docker", "Jenkins"]
}

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

export default function Skills() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Skills & Technologies</h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Programming</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.programming.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-600/20 text-blue-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Tools & Tech</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-600/20 text-green-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">DevOps</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.devops.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-purple-600/20 text-purple-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
