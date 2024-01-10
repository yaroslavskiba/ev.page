'use client';

import styles from '../../header/header.styles.module.css';
import { PiTiktokLogo, PiInstagramLogo, PiLinkedinLogo } from 'react-icons/pi';
import { MDiv } from '@/components/motionComponents/MotionGroupElement';

function SocialPersonalButtons() {
  return (
    <>
      <MDiv custom={4}>
        <div className={styles.social}>
          <button
            onClick={() => window.open('https://www.instagram.com/ev.cath/')}
            className='icons highpxsize'
            aria-label='Instagram'
          >
            <PiInstagramLogo />
          </button>
          <button
            onClick={() => window.open('https://www.tiktok.com/@ev.cath')}
            className='icons highpxsize'
            aria-label='TikTok'
          >
            <PiTiktokLogo />
          </button>
          <button
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/ekaterina-evseenko-9a2aa4299/'
              )
            }
            className='icons highpxsize'
            aria-label='LinkedIn'
          >
            <PiLinkedinLogo />
          </button>
        </div>
      </MDiv>
    </>
  );
}

export default SocialPersonalButtons;
