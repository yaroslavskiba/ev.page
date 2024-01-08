'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '../paintings/component.style.module.css';
import { variantDiv } from './variants';

interface MotionSectionScrollProps {
  children: ReactNode;
  name?: string;
}

function MDivScroll({ children, name = '' }: MotionSectionScrollProps) {
  return (
    <motion.div
      className={styles.imageBox}
      initial='hidden'
      whileInView='visible'
      variants={variantDiv}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      key={name}
    >
      {children}
    </motion.div>
  );
}

export default MDivScroll;
