'use client';

import Link from 'next/link';
import BurgerButton from './BurgerButton';
import LinkComponent from './LinkComponent';
import styles from './header.styles.module.css';
import SocialButtons from './SocialButtons';
import { useEffect, useState } from 'react';
import { Caveat } from 'next/font/google';

const cave = Caveat({ subsets: ['cyrillic'] });

type NavType = {
  name: string;
  path: string;
};

const nav: NavType[] = [
  { name: 'Главная', path: '/' },
  { name: 'Мои работы', path: '/my-works' },
  { name: 'Контакты', path: '/contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && window.innerWidth <= 768) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <header>
      <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <div
        className={`${styles.navigation} ${
          isOpen ? styles.openMenu : styles.hideMenu
        }`}
      >
        <div className={styles.logoGroup}>
          <Link
            as='/'
            href='/'
            className={`${styles.logoTitle} ${cave.className}`}
            onClick={toggleMenu}
          >
            Ev Cath
          </Link>
          <div>
            <p className={styles.logoDescription}>
              г. Минск, Республика Беларусь
            </p>
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
        <div className={styles.bottomInfo}>
          <SocialButtons />

          <p>Екатерина Евсеенко</p>
          <p>Made by Yaroslavskiba</p>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
