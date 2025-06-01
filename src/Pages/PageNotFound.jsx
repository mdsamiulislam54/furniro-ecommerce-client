import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";

const PageNotFound = () => {
    const navigate = useNavigate()

    const handleNavigate = ()=>{
        navigate('/')
    }
  return (
    <div className="min-h-screen  flex items-center justify-center " >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-white"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-9xl font-extrabold text-primary drop-shadow-lg flex ml-20"
        >
          <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="mx-1"
          >
            4
          </motion.span>
          <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="mx-1"
          >
            0
          </motion.span>
          <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="mx-1"
          >
            4
          </motion.span>
        </motion.h1>

        <p className="text-2xl mt-6">Oops! Page Not Found</p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-4 text-gray-400"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.button
          onClick={handleNavigate}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-primary/80 transition"
        >
          Go Back Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
