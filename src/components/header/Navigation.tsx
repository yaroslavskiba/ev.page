'use client';

import Link from 'next/link';
import styles from './header.styles.module.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavType = {
  name: string;
  path: string;
};

const nav: NavType[] = [
  { name: 'Главная', path: '/' },
  { name: 'Обо мне', path: '/about' },
  { name: 'Галерея', path: '/gallery' },
  { name: 'Новости и События', path: '/news' },
  { name: 'Контакты', path: '/contact' },
];

function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.mobileMenu} onClick={handleMenuClick}>
        <span
          className={styles.bar}
          style={{
            transform: `${isOpen ? 'rotate(45deg)' : 'rotate(0)'}
`,
            top: `${isOpen ? '15px' : '5px'}`,
            transition: '1s ease',
          }}
        ></span>
        <span
          className={styles.bar}
          style={{
            width: `${isOpen ? '0' : '35px'}
`,
            top: '15px',
            transition: '1s ease',
          }}
        ></span>
        <span
          className={styles.bar}
          style={{
            transform: `${isOpen ? 'rotate(-45deg)' : 'rotate(0)'}
`,
            top: `${isOpen ? '15px' : '25px'}`,
            transition: '1s ease',
          }}
        ></span>
      </button>
      <div
        className={`${styles.navigation} ${
          isOpen ? styles.openMenu : styles.hideMenu
        }`}
      >
        <div className={styles.logoGroup}>
          <Link href='/' className={styles.logoTitle}>
            Ev Cath
          </Link>
          <p className={styles.logoDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <nav>
          <ul className={styles.navigationList}>
            {nav.map(({ name, path }: NavType, index) => {
              return (
                <li key={index}>
                  <Link
                    className={
                      path === pathname
                        ? `${styles.navigationItem} ${styles.active}`
                        : styles.navigationItem
                    }
                    href={path}
                    onClick={handleMenuClick}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
