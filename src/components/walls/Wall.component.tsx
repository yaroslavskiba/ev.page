'use client';

import { Walls } from '@/api/api';
import Image from 'next/image';
import styles from '../component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';
import Link from 'next/link';
import MInfinityDiv from '../motionComponents/MInfinityDiv';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';

function WallComponent({ url, id, type, cost }: Walls) {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => handleLoad(), 700);
    return () => {
      clearTimeout(timer);
    };
  });

  const handleLoad = () => {
    setIsLoad(true);
  };

  return (
    <>
      <article style={{ display: 'contents' }}>
        <MDivScroll name={type}>
          {isLoad ? (
            <section className={styles.painting}>
              <Image
                className={styles.imageSize}
                src={url}
                width={768}
                height={768}
                alt={type}
              />
              <MInfinityDiv />
              <div className={styles.description}>
                <p>
                  Номер декора: <b>{id}</b>
                </p>
                <br />
                <h2>{type}</h2>
                <br />
                <p>
                  <i>${cost}</i>
                </p>
                <br />
                <Link
                  href={`/gallery/walls/${id}`}
                  className={styles.textLinkImage}
                  style={{ padding: '10px 15px' }}
                >
                  <i>Подробнее</i>
                </Link>
              </div>
            </section>
          ) : (
            <Loading />
          )}
        </MDivScroll>
      </article>
    </>
  );
}

export default WallComponent;
