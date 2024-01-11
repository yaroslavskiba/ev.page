import { Painting } from '@/api/api';
import Image from 'next/image';
import styles from '../component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';
import { Suspense } from 'react';
import Loading from '@/app/loading';

function PaintingComponent({ url, description, id, name, cost }: Painting) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <article style={{ display: 'contents' }}>
          <MDivScroll name={name}>
            <section className={styles.painting}>
              <Image
                className={styles.imageSize}
                src={url}
                width={720}
                height={720}
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
                <a
                  className={styles.textLinkImage}
                  href='https://t.me/Ev_Cath_helper_bot'
                  target='blank'
                >
                  <i>Вопросы & оформление</i>
                </a>
              </div>
            </section>
          </MDivScroll>
        </article>
      </Suspense>
    </>
  );
}

export default PaintingComponent;
