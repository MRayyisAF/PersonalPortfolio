import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring user authentication, product catalog, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.",
      technologies: ["JavaScript", "Chart.js", "REST API", "CSS3"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A full-stack social media application with real-time messaging, post sharing, and user profiles.",
      technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking application with workout plans, progress tracking, and nutrition logging.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/api/placeholder/400/250"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              My Projects
            </h1>
            <p className="text-xl text-dark/80 max-w-2xl mx-auto">
              Here are some of the projects I've worked on.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Project</span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary/20 text-dark px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-dark text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-dark/90 transition-colors"
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects