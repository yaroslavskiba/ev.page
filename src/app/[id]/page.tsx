import { paintings } from '@/api/api';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import {
  MDivImage,
  MHeader,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await paintings.getPainting(params.id);

  return (
    <div className='container'>
      <section className='info-block'>
        <MDivImage custom={1}>
          <CustomImage url={data.url} alt={data.name} />
        </MDivImage>
        <div className='split'>
          <MHeader custom={2}>{data.name}</MHeader>
          <MParagraph custom={3}>
            Номер картины: <b>{data.id}</b>
          </MParagraph>
          <MParagraph custom={4}>Описание: {data.description}</MParagraph>
          <MParagraph custom={5}>
            Цена: $ <i>{data.cost}</i>
          </MParagraph>
        </div>
      </section>
    </div>
  );
}
