import { Painting } from '@/api/api';
import Image from 'next/image';
import styles from './component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';

function PaintingComponent({ url, description, id, name, cost }: Painting) {
  return (
    <>
      <article style={{ display: 'contents' }}>
        <MDivScroll name={name}>
          <div className={styles.painting}>
            <Image
              className={styles.imageSize}
              src={url}
              width={720}
              height={720}
              alt={name}
            />
          </div>
          <section className={styles.description}>
            <h2>{name}</h2>
            <br />
            <p>{description}</p>
            <br />
            <p>
              <i>${cost}</i>
            </p>
          </section>
        </MDivScroll>
      </article>
    </>
  );
}

export default PaintingComponent;
