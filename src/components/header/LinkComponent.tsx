import Link from 'next/link';
import styles from './header.styles.module.css';
import { Tektur } from 'next/font/google';

const tektur = Tektur({ subsets: ['latin'] });

interface LinkComponentPropsInterface {
  name: string;
  path: string;
  pathname: string;
}

function LinkComponent({ name, path, pathname }: LinkComponentPropsInterface) {
  return (
    <>
      <Link
        replace
        href={path}
        className={
          path === pathname
            ? `${styles.navigationItem} ${styles.active}`
            : `${styles.navigationItem}`
        }
      >
        <span className={tektur.className}>{name}</span>
      </Link>
    </>
  );
}

export default LinkComponent;
