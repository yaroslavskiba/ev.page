import { Painting } from '@/api/api';
import Image from 'next/image';
import styles from './component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';

function PaintingComponent({ url, name, cost }: Painting) {
  return (
    <>
      <section style={{ display: 'contents' }}>
        <MDivScroll name={name}>
          <div className={styles.painting}>
            <Image
              className={styles.imageSize}
              src={url}
              width={768}
              height={768}
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
        </MDivScroll>
      </section>
    </>
  );
}

export default PaintingComponent;
