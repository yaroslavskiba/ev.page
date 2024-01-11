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

type ChildrenType = {
  children: ReactNode;
  custom: number;
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

function MHeader({ children, custom }: ChildrenType) {
  return (
    <>
      <motion.h2
        custom={custom}
        variants={variantContent}
        initial='hidden'
        animate='visible'
        className='split main-route-header'
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
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
        className='form-input'
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
        className='form-textarea'
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
        className='link-button'
        type='submit'
      >
        {nameButton}
      </motion.button>
    </>
  );
}

function MotionMainHeader({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.h1
        variants={variantDiv}
        initial='hidden'
        animate='visible'
        className='main-route-header'
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.h1>
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
  MotionMainHeader,
};
