import { Painting } from '@/api/api';
import Image from 'next/image';
import styles from '../component.style.module.css';
import MDivScroll from '../motionComponents/MotionDivScroll';
import { Suspense } from 'react';
import Loading from '@/app/loading';

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
                width={720}
                height={720}
                alt={name}
                priority={true}
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
              <a
                className={styles.textLinkImage}
                href='https://t.me/Ev_Cath_helper_bot'
                target='blank'
              >
                <i>Задать вопрос & Оформить</i>
              </a>
            </div>
          </section>
        </MDivScroll>
      </article>
    </>
  );
}

export default PaintingComponent;
