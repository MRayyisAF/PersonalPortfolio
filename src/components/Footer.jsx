import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-dark text-white py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-light"
            >
              M Rayyis Arif Faisal
            </motion.h3>
            <p className="text-secondary mt-2">
              
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-secondary">
              &copy; {currentYear} Muhammad Rayyis Arif Faisal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer