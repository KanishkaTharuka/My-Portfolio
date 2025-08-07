'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState, useEffect, useCallback } from 'react'

const projects = [
  {
    title: "Inventory Supply Chain Management System",
    description: "MERN stack application for managing stock and orders with real-time inventory tracking and automated reorder alerts.",
    image: "/inventary.png?height=200&width=300&text=Inventory+System",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Docker", "Jenkins", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "Vehicle Service Management System", 
    description: "Breakdown system where customers report issues with location, and admins assign nearby drivers instantly",
    image: "/breakdown.png?height=200&width=300&text=Vehicle+Service",
    technologies: ["React", "Node.js", "MongoDB", "Express","Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "Personal Finance Tracker mobile application ",
    description: "Kotlin-based mobile application for tracking income and expenses with detailed analytics and budget planning.",
    image: "/finance.png?height=200&width=300&text=Finance+Tracker",
    technologies: ["Kotlin", "Android", "shared_preferences"],
    github: "#",
    demo: "#"
  }
  ,
  {
    title: "Community Skill Exchange Platform",
    description: "Full-stack A platform where users can offer and exchange skills with others, promoting learning, collaboration, and community growth",
    image: "/skill.png?height=200&width=300&text=E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "Taskly mobile app",
    description: "Taskly is a Kotlin-based mobile app featuring a clean UI and smooth navigation for managing daily tasks.",
    image: "/task.png?height=200&width=300&text=Task+Manager",
    technologies: ["Kotlin", "Android"],
    github: "#",
    demo: "#"
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Get cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3 // lg screens
      if (window.innerWidth >= 768) return 2  // md screens
      return 1 // sm screens
    }
    return 3 // default
  }

  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.ceil(projects.length / cardsPerView)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [nextSlide, isHovered])

  const getCurrentProjects = () => {
    const startIndex = currentIndex * cardsPerView
    const endIndex = startIndex + cardsPerView
    return projects.slice(startIndex, endIndex)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center max-w-7xl mx-auto"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Featured Projects</h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>
      </motion.div>
      
      {/* Carousel Container */}
      <motion.div 
        variants={itemVariants}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 border-white/20 text-white hover:bg-black/80 hover:border-white/40 w-12 h-12 rounded-full backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 border-white/20 text-white hover:bg-black/80 hover:border-white/40 w-12 h-12 rounded-full backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Carousel Content */}
        <div className="overflow-hidden mx-16">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide()
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide()
                }
              }}
              className={`grid gap-8 ${
                cardsPerView === 3 ? 'grid-cols-1 lg:grid-cols-3' :
                cardsPerView === 2 ? 'grid-cols-1 md:grid-cols-2' :
                'grid-cols-1'
              }`}
            >
              {getCurrentProjects().map((project, index) => (
                <Card 
                  key={`${currentIndex}-${index}`}
                  className="bg-black/40 border-white/10 backdrop-blur-sm h-full group hover:bg-black/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 pt-0">
                    <div className="relative overflow-hidden rounded-lg mb-6">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-43 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 flex-1 group/btn"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-orange-600/20 border-orange-600/20 text-orange-300 hover:bg-orange-600/30 hover:border-orange-600/40 flex-1 group/btn"
                        asChild
                      >
                        {/* <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Demo
                        </a> */}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-orange-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {/* <div className="mt-6 max-w-md mx-auto">
          <div className="w-full bg-white/20 rounded-full h-1">
            <motion.div
              className="bg-orange-500 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${((currentIndex + 1) / totalSlides) * 100}%` 
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-gray-400 text-sm mt-2">
            {currentIndex + 1} of {totalSlides}
          </p>
        </div> */}
      </motion.div>
    </motion.div>
  )
}
