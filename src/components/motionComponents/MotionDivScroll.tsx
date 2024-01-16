'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '../component.style.module.css';
import { variantDivScroll } from './variants';

interface MotionSectionScrollProps {
  children: ReactNode;
  name: string;
}

function MDivScroll({ children, name }: MotionSectionScrollProps) {
  return (
    <motion.div
      className={styles.imageBox}
      initial='hidden'
      whileInView='visible'
      variants={variantDivScroll}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      key={name}
    >
      {children}
    </motion.div>
  );
}

export default MDivScroll;
