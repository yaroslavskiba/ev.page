'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.styles.module.css';
import toggleMenu from './toggleMenu';

interface LinkComponentPropsInterface {
  name: string;
  path: string;
  isOpen: boolean;
}

function LinkComponent({ name, path, isOpen }: LinkComponentPropsInterface) {
  const pathname = usePathname();

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
