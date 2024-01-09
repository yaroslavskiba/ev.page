'use client';

import Link from 'next/link';
import BurgerButton from './BurgerButton';
import LinkComponent from './LinkComponent';
import styles from './header.styles.module.css';
import SocialButtons from './SocialButtons';
import { useState } from 'react';

type NavType = {
  name: string;
  path: string;
};

const nav: NavType[] = [
  { name: 'Картины', path: '/' },
  { name: 'Стены', path: '/walls' },
  { name: 'Обо мне', path: '/about' },
  { name: 'Контакты', path: '/contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1000);
  };

  return (
    <>
      <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <div
        className={`${styles.navigation} ${
          isOpen ? styles.openMenu : styles.hideMenu
        }`}
      >
        <div className={styles.logoGroup}>
          <Link href='/' className={styles.logoTitle} onClick={toggleMenu}>
            Ev Cath
          </Link>
          <div>
            <p className={styles.logoDescription}>
              г. Минск, Республика Беларусь
            </p>
            <br />
            <p className={styles.logoDescription}>Для связи:</p>
            <a className={styles.logoDescription} href=''>
              Telegram
            </a>
          </div>
        </div>
        <nav>
          <ul className={styles.navigationList}>
            {nav.map(({ name, path }: NavType, index) => {
              return (
                <li key={index}>
                  <LinkComponent
                    name={name}
                    path={path}
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
        <SocialButtons />
        <div className={styles.bottomInfo}>
          <p>Екатерина Евсеенко</p>
          <p>Made by Yaroslavskiba</p>
        </div>
      </div>
    </>
  );
}

export default Navigation;
