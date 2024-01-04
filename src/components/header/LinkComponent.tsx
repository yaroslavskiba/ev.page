'use client';

import Link from 'next/link';
import styles from './header.styles.module.css';
import toggleMenu from './toggleMenu';
import { pathName } from '../pathName';

interface LinkComponentPropsInterface {
  name: string;
  path: string;
  isOpen: boolean;
}

function LinkComponent({ name, path, isOpen }: LinkComponentPropsInterface) {
  const pathname = pathName();

  return (
    <>
      <Link
        className={
          path === pathname
            ? `${styles.navigationItem} ${styles.active}`
            : `${styles.navigationItem}`
        }
        href={path}
        onClick={() => toggleMenu(isOpen)}
      >
        {name}
      </Link>
    </>
  );
}

export default LinkComponent;
