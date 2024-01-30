import Image from 'next/image';

function CustomSVGImage({
  styles,
  src,
  width,
  height,
}: {
  styles?: any;
  src: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt='Фоновое изображение'
      style={styles}
      priority
    />
  );
}

export default CustomSVGImage;
