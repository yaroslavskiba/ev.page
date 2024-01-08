'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { variants } from './variants';

function MParagraph({ children }: { children: ReactNode }) {
  return (
    <motion.p
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.p>
  );
}

export default MParagraph;
