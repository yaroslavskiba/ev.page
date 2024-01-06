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
  { name: 'Главная', path: '/' },
  { name: 'Обо мне', path: '/about' },
  { name: 'Галерея', path: '/gallery' },
  { name: 'Новости и События', path: '/news' },
  { name: 'Контакты', path: '/contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
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
    </header>
  );
}

export default Navigation;
