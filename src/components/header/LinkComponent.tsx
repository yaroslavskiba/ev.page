'use client';

import styles from './header.styles.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { Exo_2 } from 'next/font/google';

const exo = Exo_2({ subsets: ['latin'] });

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
        <span className={exo.className}>
          <i>{name}</i>
        </span>
      </button>
    </>
  );
}

export default LinkComponent;
