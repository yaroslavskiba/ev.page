'use client';

import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import {
  variantContent,
  variantContentBottom,
  variantContentTop,
  variantDiv,
} from './variants';
import { ContactData } from '../custom/contactForm/ContactForm';
import { Exo_2 } from 'next/font/google';

const exo = Exo_2({ subsets: ['cyrillic'] });

type ChildrenType = {
  children: ReactNode;
  custom: number;
  center?: boolean;
};

interface InputType {
  fc: Dispatch<SetStateAction<ContactData>>;
  value: string;
  custom: number;
  placeholder: string;
  id: string;
}

export type ButtonType = {
  nameButton?: string;
};

function MParagraph({ children, custom }: ChildrenType) {
  return (
    <motion.p
      custom={custom}
      variants={variantContent}
      initial='hidden'
      animate='visible'
      viewport={{ once: true }}
      className='center-p'
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
        animate='visible'
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
        animate='visible'
        className='split'
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </>
  );
}

function MHeader({ children, custom, center }: ChildrenType) {
  return (
    <>
      <motion.h1
        custom={custom}
        variants={variantContent}
        initial='hidden'
        animate='visible'
        className='split main-route-header'
        style={center ? { margin: '0 auto' } : {}}
        viewport={{ once: true }}
      >
        {children}
      </motion.h1>
    </>
  );
}

function MInput({ fc, value, custom, placeholder, id }: InputType) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    fc((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <motion.input
        className={`form-input ${exo.className}`}
        custom={custom}
        variants={variantContent}
        initial='hidden'
        animate='visible'
        viewport={{ once: true }}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={handleChange}
      />
    </>
  );
}

function MTextArea({ fc, value, custom, placeholder, id }: InputType) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    fc((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      <motion.textarea
        className={`form-textarea ${exo.className}`}
        custom={custom}
        variants={variantContent}
        initial='hidden'
        animate='visible'
        viewport={{ once: true }}
        value={value}
        placeholder={placeholder}
        id={id}
        onChange={handleChange}
      />
    </>
  );
}

function MButton({ nameButton }: ButtonType) {
  return (
    <>
      <motion.button
        custom={8}
        variants={variantContentBottom}
        initial='hidden'
        animate='visible'
        viewport={{ once: true }}
        className={`link-button ${exo.className}`}
        type='submit'
      >
        {nameButton}
      </motion.button>
    </>
  );
}

function MLink({
  children,
  href,
  custom,
}: {
  children: ReactNode;
  href: string;
  custom: number;
}) {
  return (
    <>
      <motion.a
        href={href}
        style={{
          padding: '5px 0',
          width: 'max-content',
          color: '#696969',
        }}
        custom={custom}
        variants={variantContent}
        initial='hidden'
        animate='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='center-p'
      >
        {children}
      </motion.a>
    </>
  );
}

function MDivNav({ children, custom }: ChildrenType) {
  return (
    <>
      <motion.div
        custom={custom}
        variants={variantContent}
        initial='hidden'
        animate='visible'
        className='gallery-nav-item'
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </>
  );
}

export {
  MParagraph,
  MDiv,
  MDivImage,
  MHeader,
  MInput,
  MTextArea,
  MButton,
  MLink,
  MDivNav,
};
