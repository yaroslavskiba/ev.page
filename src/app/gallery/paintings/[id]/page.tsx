import { paintings } from '@/api/api';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import SocialAddComponent from '@/components/custom/socialAddComponent/SocialAddComponent';
import {
  MDivImage,
  MParagraph,
  MotionMainHeader,
} from '@/components/motionComponents/MotionGroupElement';
import Link from 'next/link';
import { TbArrowBigLeftLine } from 'react-icons/tb';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await paintings.getPainting(params.id);

  return (
    <div className='container'>
      <MotionMainHeader>
        <Link className='header-icon' href='/gallery/paintings'>
          <TbArrowBigLeftLine />
        </Link>
        {data.name}
      </MotionMainHeader>
      <section className='info-block'>
        <MDivImage custom={1}>
          <CustomImage url={data.url} alt={data.name} />
        </MDivImage>
        <div className='split' style={{ alignItems: 'flex-start' }}>
          <MParagraph custom={3}>
            Номер картины: <b>{data.id}</b>
          </MParagraph>
          <MParagraph custom={4}>Описание: {data.description}</MParagraph>
          <MParagraph custom={5}>
            Цена: <i>${data.cost}</i>
          </MParagraph>
          <SocialAddComponent start={6} />
        </div>
      </section>
    </div>
  );
}
