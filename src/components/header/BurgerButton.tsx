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
            top: `${isOpen ? '17px' : '7px'}`,
            left: `${isOpen ? '3px' : '3px'}`,
            transition: '1s ease',
          }}
        ></span>
        <span
          className={styles.bar}
          style={{
            width: `${isOpen ? '10px' : '35px'}`,
            top: '17px',
            left: `${isOpen ? '3px' : '3px'}`,
            transition: '1s ease',
          }}
        ></span>
        <span
          className={styles.bar}
          style={{
            transform: `${isOpen ? 'rotate(-45deg)' : 'rotate(0)'}`,
            top: `${isOpen ? '17px' : '27px'}`,
            left: `${isOpen ? '3px' : '3px'}`,
            transition: '1s ease',
          }}
        ></span>
      </div>
    </>
  );
}

export default BurgerButton;
