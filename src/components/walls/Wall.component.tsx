import { Walls } from '@/api/api';
import Image from 'next/image';
import styles from '../component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import Link from 'next/link';

function WallComponent({ url, id, type, cost }: Walls) {
  return (
    <>
      <article style={{ display: 'contents' }}>
        <MDivScroll name={type}>
          <section className={styles.painting}>
            <Suspense fallback={<Loading />}>
              <Image
                className={styles.imageSize}
                src={url}
                width={680}
                height={680}
                alt={type}
                priority
              />
            </Suspense>

            <div className={styles.description}>
              <p>
                Номер картины: <b>{id}</b>
              </p>
              <br />
              <h2>{type}</h2>
              <br />
              <p>
                <i>${cost}</i>
              </p>
              <br />
              <Link href={`/walls/${id}`} className={styles.textLinkImage}>
                <i>Подробнее</i>
              </Link>
            </div>
          </section>
        </MDivScroll>
      </article>
    </>
  );
}

export default WallComponent;
