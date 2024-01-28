import styles from './video.styles.module.css';

type VideoType = {
  src: string;
};

export function Video({ src }: VideoType) {
  return (
    <video className={styles.videoContainer} preload='true' playsInline muted>
      <source src={src} type='video/mp4' />
      <track src='/path/to/captions.vtt' label='English' />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
