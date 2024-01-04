import Link from 'next/link';
import { PiTiktokLogo, PiInstagramLogo } from 'react-icons/pi';
import BurgerButton from './BurgerButton';
import LinkComponent from './LinkComponent';
import styles from './header.styles.module.css';

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
  let isOpen = false;

  return (
    <>
      <BurgerButton isOpen={isOpen} />
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
                  <LinkComponent name={name} path={path} isOpen={isOpen} />
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <div className={styles.social}>
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
        </div> */}
        //TODO сделать клиентским
        <div className={styles.bottomInfo}>
          <p>Екатерина Евсеенко</p>
          <p>Made by Yaroslavskiba</p>
        </div>
      </div>
    </>
  );
}

export default Navigation;
