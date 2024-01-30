import NavHeader from '@/components/custom/NavHeader';
import Video from '@/components/custom/Video';
import CustomSVGImage from '@/components/custom/bgImages/customBgImage';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import SocialButtons from '@/components/header/SocialButtons';
import {
  MGroupDiv,
  MParagraphScroll,
  MSubTitleScroll,
  MTitleScroll,
} from '@/components/motionComponents/MMainComponents';
import { MDivImage } from '@/components/motionComponents/MotionGroupElement';
import Link from 'next/link';

function Page() {
  return (
    <div className='main-container'>
      <NavHeader text={'Главная'} />
      <div className='wrapper'>
        <div className='main-block'>
          <br />
          <div className='media'>
            <Video src='/v_2.mp4' />
          </div>
          <div className='info bottom'>
            <>
              <CustomSVGImage
                src='/svg/16.svg'
                width={150}
                height={100}
                styles={{ opacity: '.7' }}
              />
              <MTitleScroll custom={1}>Ev cath</MTitleScroll>
              <MSubTitleScroll custom={2}>Екатерина Евсеенко</MSubTitleScroll>
              <MParagraphScroll custom={3}>
                <b>-</b> художник / декоратор стен
              </MParagraphScroll>
            </>
          </div>
        </div>

        <div className='main-block'>
          <div className='fullscreenInfo'>
            <CustomSVGImage
              src='/svg/9.svg'
              width={250}
              height={200}
              styles={{
                opacity: '.7',
                transform: 'scaleX(-1)',
              }}
            />
            <MTitleScroll custom={1}>Художник / Декоратор</MTitleScroll>
            <MParagraphScroll custom={2}>
              Превращаю стены в произведения <b>искусства</b>. <br />
              Пишу картины по <b>своему </b>видению, а так же с удовольствием
              реализую <b>Ваши </b>идеи!
              <br />
              <br />
              <i>Посмотреть работы:</i>
              <br />
            </MParagraphScroll>
            <MGroupDiv custom={3}>
              <Link href='/my-works/paintings'>
                <i>Картины</i>
              </Link>
              <Link href='/my-works/walls'>
                <i>Декор стен</i>
              </Link>
            </MGroupDiv>
          </div>
        </div>

        <div className='main-block' style={{ flexWrap: 'wrap-reverse' }}>
          <div className='info top'>
            <MTitleScroll custom={1}>Будем на связи</MTitleScroll>
            <br />
            <MParagraphScroll custom={2}>
              Напишите мне и <b>вместе </b> мы сможем сделать ваш дом уютнее!
              <br />
            </MParagraphScroll>
            <br />
            <MGroupDiv custom={3}>
              <SocialButtons />
            </MGroupDiv>
            <br />
            <MGroupDiv custom={3}>
              <Link href='/contact'>
                <i>Связаться со мной</i>
              </Link>
              <a href='https://t.me/Ev_Cath_helper_bot' target='blank'>
                <i>Бот телеграм</i>
              </a>
            </MGroupDiv>
            <br />
            <br />
            <CustomSVGImage
              src='/svg/10.svg'
              width={150}
              height={200}
              styles={{ opacity: '.7', transform: 'rotate(90deg)' }}
            />
          </div>
          <div className='media'>
            <MDivImage custom={1}>
              <CustomImage
                url={'/staticImages/main1.webp'}
                alt={'Главное изображение'}
              />
            </MDivImage>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
