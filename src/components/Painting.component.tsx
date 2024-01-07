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
        <div className={styles.painting}>
          <Image
            className={styles.imageSize}
            src={url}
            width={820}
            height={820}
            alt={name}
          />
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid.
          </p>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque, doloribus!
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </motion.section>
    </>
  );
}

export default PaintingComponent;
