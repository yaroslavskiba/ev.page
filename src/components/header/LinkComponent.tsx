'use client';

import styles from './header.styles.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });

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
  const route = useRouter();

  const handleLink = (path: string) => {
    if (pathname === path) return;

    toggleMenu();
    setTimeout(() => {
      route.replace(path);
    }, 500);
  };

  return (
    <>
      <button
        className={
          pathname === path
            ? `${styles.navigationItem} ${styles.active}`
            : `${styles.navigationItem}`
        }
        onClick={() => handleLink(path)}
      >
        <span className={mont.className}>{name}</span>
      </button>
    </>
  );
}

export default LinkComponent;
