'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "kanishkatharuka500@gmail.com",
    href: "mailto:kanishkatharuka500@gmail.com",
    color: "bg-blue-600"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "KanishkaTharuka",
    href: "https://github.com/KanishkaTharuka",
    color: "bg-gray-800"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "kanishka-tharuka",
    href: "http://linkedin.com/in/kanishka-tharuka-247279309",
    color: "bg-blue-700"
  }
]

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

export default function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          I'm always open to discussing new opportunities and interesting projects
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8"
      >
        {/* Contact Information */}
        {contactInfo.map((contact, index) => (
        <motion.div key={index} variants={itemVariants} className="space-y-6">
          
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
              <CardContent className="p-6">
              <a 
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4"
              >
                <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-300">{contact.value}</p>
                </div>
              </a>
              </CardContent>
            </Card>
          
        </motion.div>
  ))}
        {/* Contact Form */}
        {/* <motion.div variants={itemVariants}>
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-500 resize-none"
                />
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div> */}
      </motion.div>
    </motion.div>
  )
}
