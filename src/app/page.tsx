import NavHeader from '@/components/custom/NavHeader';
import Video from '@/components/custom/Video';
import CustomSVGImage from '@/components/custom/bgImages/customBgImage';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import {
  MDivScrollContainer,
  MGroupDiv,
  MSubTitleScroll,
  MTextScroll,
  MTitleScroll,
} from '@/components/motionComponents/MMainComponents';
import Link from 'next/link';

function Page() {
  return (
    <div className='main-container'>
      <NavHeader text={'Главная'} />
      <div className='wrapper'>
        <div className='main-block'>
          <br />
          <div className='media'>
            <MDivScrollContainer>
              <Video src='/v_0.mp4' />
            </MDivScrollContainer>
          </div>
          <div className='info bottom'>
            <>
              <MDivScrollContainer>
                <CustomSVGImage
                  src='/svg/16.svg'
                  width={150}
                  height={100}
                  styles={{ opacity: '.7' }}
                />
              </MDivScrollContainer>
              <MTitleScroll custom={1}>Ev cath</MTitleScroll>
              <MSubTitleScroll custom={2}>Екатерина Евсеенко</MSubTitleScroll>
              <MTextScroll custom={3}>
                <b>-</b> <i>художник / декоратор стен</i>
              </MTextScroll>
            </>
          </div>
        </div>

        <div className='main-block'>
          <div className='fullscreenInfo'>
            <MDivScrollContainer>
              <CustomSVGImage
                src='/svg/14.svg'
                width={250}
                height={200}
                styles={{ opacity: '.7' }}
              />
            </MDivScrollContainer>
            <MTitleScroll custom={1}>
              ... Что-то тут надо написать. Короткое но по смыслу емкое <br />
              Кстати пары строк будет достаточно
            </MTitleScroll>
          </div>
        </div>

        <div className='main-block'>
          <div className='info top'>
            <MTitleScroll custom={1}>
              Дальше нужен блок для картин и стен, отличающийся от первого,
              слишком много однотипного тоже плохо
            </MTitleScroll>
            <br />
            <br />
            <MDivScrollContainer>
              <CustomSVGImage
                src='/svg/5.svg'
                width={150}
                height={200}
                styles={{ opacity: '.7', transform: 'rotate(30deg)' }}
              />
            </MDivScrollContainer>
          </div>
          <div className='media'>
            <CustomImage
              url={'/staticImages/main1.webp'}
              alt={'Главное изображение'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
