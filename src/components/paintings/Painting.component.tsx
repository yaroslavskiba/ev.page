import { Painting } from '@/api/api';
import Image from 'next/image';
import styles from '../component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import Link from 'next/link';

function PaintingComponent({ url, description, id, name, cost }: Painting) {
  return (
    <>
      <article style={{ display: 'contents' }}>
        <MDivScroll name={name}>
          <section className={styles.painting}>
            <Suspense fallback={<Loading />}>
              <Image
                className={styles.imageSize}
                src={url}
                width={680}
                height={680}
                alt={name}
              />
            </Suspense>
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
                href={`/${id}`}
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
