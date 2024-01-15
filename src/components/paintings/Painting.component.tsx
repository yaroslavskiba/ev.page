import { Painting } from '@/api/api';
import Image from 'next/image';
import styles from '../component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';
import Link from 'next/link';

function PaintingComponent({ url, description, id, name, cost }: Painting) {
  return (
    <>
      <article style={{ display: 'contents' }}>
        <MDivScroll name={name}>
          <section className={styles.painting}>
            <Image
              className={styles.imageSize}
              src={url}
              width={768}
              height={768}
              alt={name}
            />
            <div className={styles.description}>
              <p>
                Номер картины: <b>{id}</b>
              </p>
              <br />
              <h2>{name}</h2>
              <br />
              <p>{description}</p>
              <br />
              <p>
                <i>${cost}</i>
              </p>
              <br />
              <Link
                href={`/gallery/paintings/${id}`}
                className={styles.textLinkImage}
                style={{ padding: '10px 15px' }}
              >
                <i>Подробнее</i>
              </Link>
            </div>
          </section>
        </MDivScroll>
      </article>
    </>
  );
}

export default PaintingComponent;
