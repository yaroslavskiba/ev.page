import Image from 'next/image';
import styles from './custom.styles.module.css';
import Loading from '@/app/loading';

type ImageType = {
  url: string;
  alt: string;
};

function CustomImage({ url, alt }: ImageType) {
  return (
    <div className={styles.imageBox}>
      <div className={styles.painting}>
        <Image
          className={styles.imageSize}
          src={url}
          width={560}
          height={560}
          alt={alt}
          placeholder='blur'
          blurDataURL='/staticImages/loader.jpeg'
        />
      </div>
    </div>
  );
}

export default CustomImage;
