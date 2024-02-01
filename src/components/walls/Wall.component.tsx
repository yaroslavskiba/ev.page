'use client';

import { Walls } from '@/api/api';
import Image from 'next/image';
import styles from '../component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';
import Link from 'next/link';
import MInfinityDiv from '../motionComponents/MInfinityDiv';

function WallComponent({ url, id, type, cost }: Walls) {
  return (
    <>
      <article style={{ display: 'contents' }}>
        <MDivScroll name={type}>
          <section className={styles.painting}>
            <Image src={url} fill sizes='100%' alt={type} priority />
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
                as={`/my-works/walls/${id}`}
                href={`/my-works/walls/${id}`}
                className={styles.textLinkImage}
                style={{ padding: '10px 15px', color: '#fff' }}
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

export default WallComponent;
