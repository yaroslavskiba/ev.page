'use client';

import { Painting } from '@/api/api';
import Image from 'next/image';
import styles from '../component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';
import Link from 'next/link';
import MInfinityDiv from '../motionComponents/MInfinityDiv';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';

function PaintingComponent({ url, description, id, name, cost }: Painting) {
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
        <MDivScroll name={name}>
          {isLoad ? (
            <section className={styles.painting}>
              <Image
                className={styles.imageSize}
                src={url}
                width={768}
                height={768}
                alt={name}
              />
              <MInfinityDiv />
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
          ) : (
            <Loading />
          )}
        </MDivScroll>
      </article>
    </>
  );
}

export default PaintingComponent;
