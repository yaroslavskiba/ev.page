'use client';

import { motion } from 'framer-motion';
import { Caveat } from 'next/font/google';
import { ReactNode } from 'react';
const cave = Caveat({ subsets: ['cyrillic'] });

const variantDiv = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const variantDivText = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function MTitleScroll({
  children,
  custom,
}: {
  children: ReactNode;
  custom: number;
}) {
  return (
    <motion.h2
      custom={custom}
      className={`info-title ${cave.className}`}
      initial='hidden'
      whileInView='visible'
      variants={variantDivText}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.h2>
  );
}

function MSubTitleScroll({
  children,
  custom,
}: {
  children: ReactNode;
  custom: number;
}) {
  return (
    <motion.h3
      custom={custom}
      className={`info-subtitle ${cave.className}`}
      initial='hidden'
      whileInView='visible'
      variants={variantDivText}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.h3>
  );
}

function MParagraphScroll({
  children,
  custom,
}: {
  children: ReactNode;
  custom: number;
}) {
  return (
    <motion.p
      custom={custom}
      initial='hidden'
      whileInView='visible'
      variants={variantDivText}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.p>
  );
}

function MDivScrollContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      style={{ position: 'relative' }}
      initial='hidden'
      whileInView='visible'
      variants={variantDiv}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function MGroupDiv({
  children,
  custom,
}: {
  children: ReactNode;
  custom: number;
}) {
  return (
    <motion.div
      custom={custom}
      className='info-group'
      initial='hidden'
      whileInView='visible'
      variants={variantDivText}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export {
  MDivScrollContainer,
  MTitleScroll,
  MSubTitleScroll,
  MParagraphScroll,
  MGroupDiv,
};
