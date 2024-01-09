'use client';

import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import {
  variantContent,
  variantContentBottom,
  variantContentTop,
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
      whileInView='visible'
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
      <motion.h2
        custom={custom}
        variants={variantContent}
        initial='hidden'
        whileInView='visible'
        className='split'
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
        whileInView='visible'
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
        whileInView='visible'
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
        custom={7}
        variants={variantContentBottom}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='link-button'
        type='submit'
      >
        {nameButton}
      </motion.button>
    </>
  );
}

export { MParagraph, MDiv, MDivImage, MHeader, MInput, MTextArea, MButton };
