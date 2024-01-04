'use client';

import styles from './header.styles.module.css';
import toggleMenu from './toggleMenu';

interface BurgerButtonPropsInterface {
  isOpen: boolean;
}

function BurgerButton({ isOpen }: BurgerButtonPropsInterface) {
  return (
    <>
      <div className={styles.mobileMenu} onClick={() => toggleMenu(isOpen)}>
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
    </>
  );
}

export default BurgerButton;
