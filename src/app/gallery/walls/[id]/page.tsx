import { paintings } from '@/api/api';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import SocialAddComponent from '@/components/custom/socialAddComponent/SocialAddComponent';
import {
  MDivImage,
  MHeader,
  MParagraph,
  MotionMainHeader,
} from '@/components/motionComponents/MotionGroupElement';
import Link from 'next/link';
import { TbArrowBigLeftLine } from 'react-icons/tb';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await paintings.getWall(params.id);

  return (
    <div className='container'>
      <MotionMainHeader>
        <Link className='header-icon' href='/gallery/walls'>
          <TbArrowBigLeftLine />
        </Link>
        {data.type}
      </MotionMainHeader>
      <section className='info-block'>
        <MDivImage custom={1}>
          <CustomImage url={data.url} alt={data.url} />
        </MDivImage>
        <div className='split'>
          <MParagraph custom={4}>
            Цена: <i>${data.cost}</i>
          </MParagraph>
          <SocialAddComponent start={5} />
        </div>
      </section>
    </div>
  );
}
