import Image from 'next/image';
import styles from './custom.styles.module.css';
import Loading from '@/app/loading';
import { Suspense } from 'react';

type ImageType = {
  url: string;
  alt: string;
};

function CustomImage({ url, alt }: ImageType) {
  return (
    <div className={styles.imageBox}>
      <div className={styles.painting}>
        <Suspense fallback={<Loading />}>
          <Image
            className={styles.imageSize}
            src={url}
            width={560}
            height={560}
            alt={alt}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default CustomImage;
