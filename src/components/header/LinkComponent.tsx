'use client';

import Link from 'next/link';
import styles from './header.styles.module.css';
import { usePathname } from 'next/navigation';

interface LinkComponentPropsInterface {
  name: string;
  path: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

function LinkComponent({
  name,
  path,
  toggleMenu,
}: LinkComponentPropsInterface) {
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
        shallow={true}
        onClick={() => toggleMenu()}
      >
        {name}
      </Link>
    </>
  );
}

export default LinkComponent;
