import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    'React', 'JavaScript','Figma', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'Git', 'Responsive Design', 'REST APIs', 'Vite', 'Framer Motion',
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
      <div className="max-w-4xl mx-auto">
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
              About Me
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <motion.div
  variants={itemVariants}
  className="space-y-6"
>
  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl overflow-hidden">
    <img 
      src="/src/assets/profile-photo.jpg" 
      alt="Muhammad Rayyis Arif Faisal"
      className="w-full h-full object-cover"
    />
  </div>
  
  <div className="text-center">
    <h2 className="text-2xl font-bold text-dark mb-2">
      Muhammad Rayyis Arif Faisal
    </h2>
    <p className="text-primary text-lg font-semibold">
      Aspiring UI/UX Designer
    </p>
  </div>
</motion.div>

            {/* Bio Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <p className="text-lg text-dark/80 leading-relaxed font-normal">
                I'm a passionate web developer dedicated to creating clean, modern, 
                and user-friendly web experiences. With a strong foundation in modern 
                front-end technologies, I enjoy turning complex problems into simple, 
                beautiful designs.
              </p>
              
              <p className="text-lg text-dark/80 leading-relaxed font-normal">
                My journey in web development started with a curiosity about how 
                websites work, and it has evolved into a passion for building 
                interactive and responsive applications that provide seamless 
                user experiences.
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold text-dark mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-secondary/20 text-dark px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About