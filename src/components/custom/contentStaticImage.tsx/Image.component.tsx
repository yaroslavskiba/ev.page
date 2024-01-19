import Image from 'next/image';
import styles from './custom.styles.module.css';

type ImageType = {
  url: string;
  alt: string;
};

function CustomImage({ url, alt }: ImageType) {
  return (
    <div className={styles.painting}>
      <Image
        className={styles.imageSize}
        src={url}
        fill
        sizes='100%'
        alt={alt}
        priority
      />
    </div>
  );
}

export default CustomImage;
