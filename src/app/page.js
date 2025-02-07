"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 relative overflow-hidden">
      {/* Animated 3D Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-cover bg-center opacity-20 animate-pulse"
      ></motion.div>

      {/* Floating 3D Elements */}
      <motion.div
        initial={{ opacity: 0, rotateX: 45, rotateY: 45 }}
        animate={{ opacity: 0.6, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-1/3 w-32 h-32 bg-cyan-400 rounded-full blur-3xl opacity-30 shadow-lg shadow-cyan-500"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, rotateX: -45, rotateY: -45 }}
        animate={{ opacity: 0.6, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-1/3 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 shadow-lg shadow-blue-600"
      ></motion.div>

      {/* Hero Section with Animated Text */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateX: 15 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <div className="pb-4">
          <h1 className="text-7xl font-extrabold tracking-wide mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_5px_25px_rgba(0,255,255,0.8)] animate-glow leading-[1.3]">
            We Are Launching Soon
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-2xl text-gray-300 max-w-lg mx-auto"
        >
          Empowering your financial future with expert insights and strategic solutions.
        </motion.p>
      </motion.div>

      {/* Rotating 3D Rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
        animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-16 left-1/2 transform -translate-x-1/2 w-48 h-48 border-4 border-cyan-400 rounded-full blur-md opacity-40 animate-spin-slow"
        
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
        animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-64 border-4 border-blue-500 rounded-full blur-md opacity-40 animate-spin-slow"
      ></motion.div>
      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute bottom-8 lg:bottom-16 text-center text-gray-300"
      >
        <p className="text-lg font-semibold">Contact Us</p>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <FiMail className="text-cyan-400 text-xl" />
          <a
            href="mailto:info@pmfglobalfinancial.com"
            className="text-cyan-400 hover:text-cyan-300 transition text-lg"
          >
            info@pmfglobalfinancial.com
          </a>
        </div>
        {/* <div className="flex items-center justify-center space-x-4 mt-2">
          <FiPhone className="text-blue-400 text-xl" />
          <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300 transition text-lg">+1 234 567 890</a>
        </div> */}
      </motion.div>
    </div>
  );
}
