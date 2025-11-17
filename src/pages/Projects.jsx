import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Burung Loncat",
      description: "A recreation of the iconic game Flappy Bird.",
      technologies: ["React", "Tailwind",],
      github: "https://github.com/MRayyisAF/FlappyBird",
      demo: "https://burungloncat.mrayyisaf.my.id/",
      image: "burung loncat.png"
    },
    {
      id: 2,
      title: "Block Blast",
      description: "A demake version of the popular mobile game Block Blast.",
      technologies: ["JavaScript", "Tailwind", "React"],
      github: "https://github.com/MRayyisAF/Blockblast",
      demo: "https://blockblast.mrayyisaf.my.id/",
      image: "blockblast.png"
    },
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
              Here are some of the projects I've created.
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
                <div className="h-48 w-full overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
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

          {/* Contact Me Button Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                Interested in collaborating?
              </h2>
              <p className="text-dark/70 mb-6 max-w-md mx-auto">
                Have a project in mind or want to collaborate? Let's discuss how we can bring your ideas to life.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(82, 109, 130, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-primary/90"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects