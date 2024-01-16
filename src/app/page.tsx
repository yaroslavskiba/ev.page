import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import {
  MDivImage,
  MHeader,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';
import Link from 'next/link';

function Page() {
  return (
    <div className='container'>
      <section className='info-block-fullwidth'>
        {/* <MDivImage custom={1}>
          <CustomImage url='/staticImages/main1.webp' alt='main image' />
        </MDivImage> */}
        {/* <div className='split'> */}
        <MHeader custom={2}>Карта сайта</MHeader>
        <MParagraph custom={2}>
          Привет! На сайте предоставлены работы художника-декоратора Екатерины
          Евсеенко <a href='https://www.instagram.com/ev.cath/'>ev.cath</a>
        </MParagraph>
        <MParagraph custom={3}>
          Раздел с картинами: {<Link href='/gallery/paintings'>Картины</Link>}
          <br />
          Основной уклон делается на объемные картины, либо абстракция ...
          Ляляля, придумаем дальше что-нибудь
        </MParagraph>
        <MParagraph custom={4}>
          Раздел с декором:
          {<Link href='/gallery/paintings'>Декорация стен</Link>}
          <br />
          такая же шляпа, надо думать текст... Господи, я же не копирайтер и уже
          3 часа ночи, где мой кофе?
        </MParagraph>
        <MParagraph custom={5}>
          Связаться со мной можно через{' '}
          <Link href='/contact'>форму на сайте</Link> или через{' '}
          <a
            className='text-link'
            href='https://t.me/Ev_Cath_helper_bot'
            target='blank'
          >
            телеграм бота
          </a>
          <br />В недрах тундры выдры тырят в ведра ядра кедра, сунул Грека
          выдру в реку рак за выдру Греку цап
        </MParagraph>
        <MParagraph custom={6}>Ну и сюда я хз что впихнуть</MParagraph>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Page;
