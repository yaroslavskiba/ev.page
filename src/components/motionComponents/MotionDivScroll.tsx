'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '../paintings/component.style.module.css';

interface MotionSectionScrollProps {
  children: ReactNode;
  name: string;
}

function MotionDivScroll({ children, name }: MotionSectionScrollProps) {
  const sVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className={styles.imageBox}
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5 }}
      variants={sVariants}
      viewport={{ once: true, amount: 0.2 }}
      key={name}
    >
      {children}
    </motion.div>
  );
}

export default MotionDivScroll;
