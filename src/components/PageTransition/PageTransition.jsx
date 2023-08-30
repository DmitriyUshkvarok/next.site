'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const PageTransition = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
  }, [controls]);

  const exitAnimation = {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1,
        rotateY: -90,
        transformOrigin: 'center',
      }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={exitAnimation}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

