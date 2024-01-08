'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { variantContent, variantContentTop } from './variants';

type ChildrenType = {
  children: ReactNode;
  custom: number;
};

function MParagraph({ children, custom }: ChildrenType) {
  return (
    <motion.p
      custom={custom}
      variants={variantContent}
      initial='hidden'
      whileInView='visible'
      className='split'
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

function MDiv({ children, custom }: ChildrenType) {
  return (
    <>
      <motion.div
        custom={custom}
        variants={variantContent}
        initial='hidden'
        whileInView='visible'
        className='split'
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </>
  );
}

function MDivImage({ children, custom }: ChildrenType) {
  return (
    <>
      <motion.div
        custom={custom}
        variants={variantContentTop}
        initial='hidden'
        whileInView='visible'
        className='split'
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </>
  );
}

function MHeader({ children, custom }: ChildrenType) {
  return (
    <>
      <motion.h1
        custom={custom}
        variants={variantContent}
        initial='hidden'
        whileInView='visible'
        className='split'
        viewport={{ once: true }}
      >
        {children}
      </motion.h1>
    </>
  );
}

export { MParagraph, MDiv, MDivImage, MHeader };
