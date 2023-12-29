'use client';

import Link from 'next/link';
import styles from './header.styles.module.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PiTiktokLogo, PiInstagramLogo } from 'react-icons/pi';

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.mobileMenu} onClick={toggleMenu}>
        <span
          className={styles.bar}
          style={{
            transform: `${isOpen ? 'rotate(45deg)' : 'rotate(0)'}`,
            top: `${isOpen ? '15px' : '5px'}`,
            transition: '1s ease',
          }}
        ></span>
        <span
          className={styles.bar}
          style={{
            width: `${isOpen ? '0' : '35px'}`,
            top: '15px',
            transition: '1s ease',
          }}
        ></span>
        <span
          className={styles.bar}
          style={{
            transform: `${isOpen ? 'rotate(-45deg)' : 'rotate(0)'}`,
            top: `${isOpen ? '15px' : '25px'}`,
            transition: '1s ease',
          }}
        ></span>
      </div>
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
                        ? `${styles.navigationItem} ${styles.activeNavItem}`
                        : styles.navigationItem
                    }
                    href={path}
                    onClick={toggleMenu}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.social}>
          <button
            onClick={() => window.open('https://www.instagram.com/ev.cath/')}
            className='icons'
            aria-label='Instagram'
          >
            <PiInstagramLogo />
          </button>
          <button
            onClick={() => window.open('https://www.tiktok.com/@ev.cath')}
            className='icons'
            aria-label='TikTok'
          >
            <PiTiktokLogo />
          </button>
        </div>
        <div className={styles.bottomInfo}>
          <p>Екатерина Евсеенко</p>
          <p>Made by Yaroslavskiba</p>
        </div>
      </div>
    </>
  );
}

export default Navigation;
