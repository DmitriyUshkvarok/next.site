'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const PageTransition = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0, transition: { duration: 0.2 } });
  }, [controls]);

  const exitAnimation = {
    opacity: 0,
    x: '-100vw',
    transition: { duration: 0.2 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: '100vw',
        transformOrigin: 'center',
      }}
      animate={{ opacity: 1, x: 0 }}
      exit={exitAnimation}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
