'use client';

import Link from 'next/link';
import styles from './header.styles.module.css';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const handleClick = (path: string) => {
    toggleMenu();
    router.push(path);
  };

  return (
    <>
      <button
        className={
          path === pathname
            ? `${styles.navigationItem} ${styles.active}`
            : `${styles.navigationItem}`
        }
        onClick={() => handleClick(path)}
      >
        {name}
      </button>
    </>
  );
}

export default LinkComponent;
