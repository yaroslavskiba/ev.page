import NavHeader from '@/components/custom/NavHeader';
import Video from '@/components/custom/Video';
import CustomImage from '@/components/custom/contentStaticImage.tsx/Image.component';

function Page() {
  return (
    <div className='main-container'>
      <NavHeader text={'Главная'} />
      <div className='wrapper'>
        <div className='main-block'>
          <div className='media'>
            <Video src='/v_1.mp4' />
          </div>
          <div className='info'>
            <></>
          </div>
        </div>
        <div className='main-block'>
          <div className='info'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            doloremque voluptate deserunt quos inventore vel magnam dolor
            maiores sed, adipisci nobis voluptatibus illo officia ex, accusamus
            perferendis at cum molestias!
          </div>
          <div className='media'></div>
        </div>
        <div className='main-block'>
          <div className='media'></div>
          <div className='info'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            doloremque voluptate deserunt quos inventore vel magnam dolor
            maiores sed, adipisci nobis voluptatibus illo officia ex, accusamus
            perferendis at cum molestias!
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
