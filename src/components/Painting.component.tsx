'use client';

import { Painting } from '@/api/api';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './component.style.module.css';

function PaintingComponent({ url, name, cost }: Painting) {
  return (
    <>
      <motion.section
        className={styles.imageBox}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={name}
      >
        <Image className={styles.painting} src={url} fill alt={name} />
      </motion.section>
    </>
  );
}

export default PaintingComponent;
