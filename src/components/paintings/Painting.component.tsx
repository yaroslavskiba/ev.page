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
            <p className={styles.descriptionParagraph}>
              Номер картины: <b>{id}</b>
            </p>
            <br />
            <h2 className={styles.descriptionParagraph}>{name}</h2>
            <br />
            <p className={styles.descriptionParagraph}>{description}</p>
            <br />
            <p className={styles.descriptionParagraph}>
              <i>${cost}</i>
            </p>
            <br />
            <a
              className='text-link-image'
              href='https://t.me/Ev_Cath_helper_bot'
              target='blank'
            >
              <i>Задать вопрос или приобрести</i>
            </a>
          </section>
        </MDivScroll>
      </article>
    </>
  );
}

export default PaintingComponent;
