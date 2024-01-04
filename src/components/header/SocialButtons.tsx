'use client';

import styles from './header.styles.module.css';
import { PiTiktokLogo, PiInstagramLogo } from 'react-icons/pi';

function SocialButtons() {
  return (
    <>
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
    </>
  );
}

export default SocialButtons;
