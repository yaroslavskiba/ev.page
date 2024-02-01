import ContactForm from '@/components/custom/contactForm/ContactForm';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import {
  MDivImage,
  MHeader,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';
import SocialPersonalButtons from '@/components/custom/customComponents/SocialPersonal';
import NavHeader from '@/components/custom/NavHeader';
import { Metadata } from 'next';
import { Caveat } from 'next/font/google';

const cave = Caveat({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'ev.cath - Контакты',
  description:
    'Контакты для связи с ev.cath. Тут вы сможете заказать картину, декор стен или задать вопрос по ее работам',
  keywords: [
    'ev.cath',
    'купить картину',
    'декор стен',
    'художник',
    'художник Минск',
  ],
};

function Page() {
  return (
    <div className='container'>
      <NavHeader text='Связаться со мной' />
      <section className='info-block'>
        <MDivImage custom={1}>
          <CustomImage url='/staticImages/form.webp' alt='form image' />
        </MDivImage>
        <div className='split'>
          <MHeader custom={2}>
            <span className={cave.className} style={{ fontSize: '36px' }}>
              Связаться со мной
            </span>
          </MHeader>
          <MParagraph custom={3}>
            Для связи со мной вы можете использовать эту форму, либо{' '}
            <a
              className='text-link'
              href='https://t.me/Ev_Cath_helper_bot'
              target='blank'
            >
              телеграм бота
            </a>
            . Я постараюсь ответить в ближайшее время!
          </MParagraph>
          <SocialPersonalButtons />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Page;
