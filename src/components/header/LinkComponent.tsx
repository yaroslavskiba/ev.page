'use client';

import Link from 'next/link';
import styles from './header.styles.module.css';
import { usePathname, useRouter } from 'next/navigation';

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
    toggleMenu();
    setTimeout(() => {
      route.push(path);
    }, 500);
  };

  return (
    <>
      <button
        className={
          path === pathname
            ? `${styles.navigationItem} ${styles.active}`
            : `${styles.navigationItem}`
        }
        onClick={() => handleLink(path)}
      >
        {name}
      </button>
    </>
  );
}

export default LinkComponent;
