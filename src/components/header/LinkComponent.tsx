'use client';

import Link from 'next/link';
import styles from './header.styles.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { Tektur } from 'next/font/google';

const tektur = Tektur({ subsets: ['latin'] });

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
  // const route = useRouter();

  const handleLink = (path: string) => {
    if (pathname === path) return;

    toggleMenu();
    // setTimeout(() => {
    //   route.replace(path);
    // }, 500);
  };

  return (
    <>
      {/* <button
        className={
          path === pathname
            ? `${styles.navigationItem} ${styles.active}`
            : `${styles.navigationItem}`
        }
        onClick={() => handleLink(path)}
      >
        <span className={tektur.className}>{name}</span>
      </button> */}
      <Link
        replace
        href={path}
        className={
          path === pathname
            ? `${styles.navigationItem} ${styles.active}`
            : `${styles.navigationItem}`
        }
        onClick={() => handleLink(path)}
      >
        <span className={tektur.className}>{name}</span>
      </Link>
    </>
  );
}

export default LinkComponent;
