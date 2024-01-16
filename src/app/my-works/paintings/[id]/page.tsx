import { paintings } from '@/api/api';
import NavHeader from '@/components/custom/NavHeader';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import SocialAddComponent from '@/components/custom/socialAddComponent/SocialAddComponent';
import {
  MDivImage,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await paintings.getPainting(params.id);

  return (
    <div className='container'>
      <NavHeader text={`Мои работы - картины - ${data.id}`} />
      <section className='info-block'>
        <MDivImage custom={1}>
          <CustomImage url={data.url} alt={data.name} />
        </MDivImage>
        <div className='split' style={{ alignItems: 'flex-start' }}>
          <MParagraph custom={2}>
            <b>
              <i>
                <span style={{ fontSize: '20px' }}>{data.name}</span>
              </i>
            </b>
          </MParagraph>
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
