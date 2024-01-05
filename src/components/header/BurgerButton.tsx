'use client';

import styles from './header.styles.module.css';

interface BurgerButtonPropsInterface {
  isOpen: boolean;
  toggleMenu: () => void;
}

function BurgerButton({ isOpen, toggleMenu }: BurgerButtonPropsInterface) {
  return (
    <>
      <div className={styles.mobileMenu} onClick={() => toggleMenu()}>
        <span
          className={styles.bar}
          style={{
            transform: `${isOpen ? 'rotate(45deg)' : 'rotate(0)'}`,
            top: `${isOpen ? '20px' : '10px'}`,
            transition: '1s ease',
          }}
        ></span>
        <span
          className={styles.bar}
          style={{
            width: `${isOpen ? '0' : '35px'}`,
            top: '20px',
            transition: '1s ease',
          }}
        ></span>
        <span
          className={styles.bar}
          style={{
            transform: `${isOpen ? 'rotate(-45deg)' : 'rotate(0)'}`,
            top: `${isOpen ? '20px' : '30px'}`,
            transition: '1s ease',
          }}
        ></span>
      </div>
    </>
  );
}

export default BurgerButton;
