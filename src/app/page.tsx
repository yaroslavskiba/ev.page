import NavHeader from '@/components/custom/NavHeader';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';
import {
  MDivImage,
  MHeader,
  MParagraph,
} from '@/components/motionComponents/MotionGroupElement';

function Page() {
  return (
    <div className='main-container'>
      <div className='wrapper'>
        <div
          className='main-f'
          style={{ flexDirection: 'column', position: 'relative' }}
        >
          <div style={{ position: 'absolute', left: '5px', top: '20px' }}>
            <NavHeader text='Главная' />
          </div>
          <br />
          <div className='main-block'>
            <div className='main-block-f'>
              <></>
            </div>
            <div className='main-block-s'>
              <div className='words-list'>
                <div className='inner'>
                  <span className='word'>Екатерина</span>
                  <span className='word'>Евсеенко</span>
                  <span className='word'>Художник</span>
                  <span className='word'>Декоратор</span>
                  <span className='word'>Екатерина</span>
                  <span className='word'>Евсеенко</span>
                  <span className='word'>Художник</span>
                  <span className='word'>Декоратор</span>
                  <span className='word'>Екатерина</span>
                  <span className='word'>Евсеенко</span>
                  <span className='word'>Художник</span>
                  <span className='word'>Декоратор</span>
                </div>
                <div className='fade'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='main-block'>
          <div className='main-block-f'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            nesciunt id inventore, reprehenderit quasi officia a mollitia!
            Impedit eligendi, rem saepe praesentium aperiam totam dolores
            repellat, pariatur sapiente dolorum suscipit.
          </div>
          <div className='main-block-s'>
            <></>
          </div>
        </div>

        <div className='main-block'>
          <div className='main-block-f'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            nesciunt id inventore, reprehenderit quasi officia a mollitia!
            Impedit eligendi, rem saepe praesentium aperiam totam dolores
            repellat, pariatur sapiente dolorum suscipit.
          </div>
          <div className='main-block-s'>
            <></>
          </div>
        </div>

        <div className='main-block'>
          <div className='main-block-f'>
            <></>
          </div>
          <div className='main-block-s'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            molestiae explicabo numquam porro earum ullam asperiores nesciunt
            quam perspiciatis! Illo veritatis assumenda nihil debitis tempora
            enim iusto dicta non cum?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

{
  /* <section className='info-block'>
        <MDivImage custom={1}>
          <CustomImage url='/staticImages/main1.webp' alt='main image' />
        </MDivImage>
        <div className='split'>
          <MHeader custom={2}>Екатерина Евсеенко</MHeader>
          <MParagraph custom={2}>
            Привет! Меня зовут <b>Екатерина Евсеенко</b>, и я художница и
            декоратор стен. Мне 25 лет, и я родилась в прекрасном городе
            Витебске. Страсть к искусству и рисованию меня сопровождала с
            детства, и поэтому я решила посвятить свою жизнь творчеству.
          </MParagraph>
          <MParagraph custom={3}>
            Сейчас я живу и работаю в Минске, где мне удалось найти прекрасные
            возможности для развития в области искусства. Здесь я нашла много
            интересных проектов и сотрудничеств, которые помогают мне раскрыть
            свой творческий потенциал.
          </MParagraph>
          <MParagraph custom={4}>
            Мое вдохновение находится в природе, и я обожаю рисовать объемные
            картины, которые передают красоту окружающего мира.
          </MParagraph>
          <MParagraph custom={5}>
            Я счастлива, что моя работа позволяет мне делиться своим творчеством
            и вдохновлять других людей. Будь то украшение интерьера, создание
            уникальной атмосферы или просто наслаждение красотой искусства, я
            надеюсь, что мои работы оставят яркий след в сердцах людей.
          </MParagraph>
          <MParagraph custom={6}>
            Я всегда открыта для новых проектов и с нетерпением жду возможности
            поделиться своим искусством с вами.
          </MParagraph>
        </div>
      </section> */
}
