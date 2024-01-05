'use client';

import { Painting } from '@/api/api';
import { motion } from 'framer-motion';
import Image from 'next/image';

function PaintingComponent({ url, name, cost }: Painting) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={name}
      >
        <Image
          src={url}
          width={720}
          height={720}
          sizes='(max-width: 768px) 90vw, 720px'
          alt={name}
        />
      </motion.div>
    </>
  );
}

export default PaintingComponent;
