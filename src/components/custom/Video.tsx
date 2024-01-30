'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import styles from './video.styles.module.css';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import Loading from '@/app/loading';

type VideoType = {
  src: string;
};

export function Video({ src }: VideoType) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasEnded, setHasEnded] = useState<boolean>(false);

  const handlePlay = () => {
    if (ref.current) {
      ref.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (ref.current) {
      ref.current.pause();
      setIsPlaying(false);
    }
  };

  const handleReplay = () => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play();
      setIsPlaying(true);
      setHasEnded(false);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('ended', () => {
        setIsPlaying(false);
        setHasEnded(true);
      });
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('ended', () => {
          setIsPlaying(false);
          setHasEnded(true);
        });
      }
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.player}>
        <video
          ref={ref}
          className={styles.videoContainer}
          preload='auto'
          playsInline
          muted
          controls={false}
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className={styles.buttons}>
          {!hasEnded && (
            <>
              {isPlaying ? (
                <button className={styles.hidden} onClick={handlePause}>
                  Кнопка
                </button>
              ) : (
                <button className={styles.playerButton} onClick={handlePlay}>
                  <FaPlay />
                </button>
              )}
            </>
          )}
          {hasEnded && (
            <button className={styles.playerButton} onClick={handleReplay}>
              <FaRedo />
            </button>
          )}
        </div>
      </div>
    </Suspense>
  );
}

export default Video;
